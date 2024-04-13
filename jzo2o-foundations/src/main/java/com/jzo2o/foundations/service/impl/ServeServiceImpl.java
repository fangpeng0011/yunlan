package com.jzo2o.foundations.service.impl;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.util.ObjectUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.conditions.query.LambdaQueryChainWrapper;
import com.jzo2o.common.expcetions.CommonException;
import com.jzo2o.common.expcetions.ForbiddenOperationException;
import com.jzo2o.common.model.PageResult;
import com.jzo2o.foundations.enums.FoundationHotEnum;
import com.jzo2o.foundations.enums.FoundationStatusEnum;
import com.jzo2o.foundations.mapper.RegionMapper;
import com.jzo2o.foundations.mapper.ServeItemMapper;
import com.jzo2o.foundations.model.domain.Region;
import com.jzo2o.foundations.model.domain.Serve;
import com.jzo2o.foundations.mapper.ServeMapper;
import com.jzo2o.foundations.model.domain.ServeItem;
import com.jzo2o.foundations.model.dto.request.ServePageQueryReqDTO;
import com.jzo2o.foundations.model.dto.request.ServeUpsertReqDTO;
import com.jzo2o.foundations.model.dto.response.ServeResDTO;
import com.jzo2o.foundations.service.IServeService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.jzo2o.mysql.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

/**
 * <p>
 * 服务表 服务实现类
 * </p>
 *
 * @author itcast
 * @since 2023-12-06
 */
@Service
public class ServeServiceImpl extends ServiceImpl<ServeMapper, Serve> implements IServeService {


    @Autowired
    private ServeItemMapper serveItemMapper;

    @Autowired
    private RegionMapper regionMapper;


    @Override
    public PageResult<ServeResDTO> page(ServePageQueryReqDTO servePageQueryReqDTO) {
        PageResult<ServeResDTO> serveResDTOPageResult = PageHelperUtils.selectPage(
                servePageQueryReqDTO,
                () -> baseMapper.queryServeListByRegionId(servePageQueryReqDTO.getRegionId()));
        return serveResDTOPageResult;
    }

    @Override
    @Transactional
    public void batchAdd(List<ServeUpsertReqDTO> serveUpsertReqDTOList) {
        for (ServeUpsertReqDTO serveUpsertReqDTO : serveUpsertReqDTOList) {
            //1.校验服务项是否为启用状态，不是启用状态不能新增
            ServeItem serveItem = serveItemMapper.selectById(serveUpsertReqDTO.getServeItemId());
            //如果服务项信息不存在或未启用
            if (ObjectUtil.isNull(serveItem) || serveItem.getActiveStatus() != FoundationStatusEnum.ENABLE.getStatus()) {
                throw new ForbiddenOperationException("该服务未启用无法添加到区域下使用");
            }
            //2.校验是否重复新增
            Integer count = lambdaQuery()
                    .eq(Serve::getRegionId, serveUpsertReqDTO.getRegionId())
                    .eq(Serve::getServeItemId, serveUpsertReqDTO.getServeItemId())
                    .count();
            if (count > 0) {
                throw new ForbiddenOperationException(serveItem.getName() + "服务已存在");
            }
            //3.新增服务
            Serve serve = BeanUtil.toBean(serveUpsertReqDTO, Serve.class);
            Region region = regionMapper.selectById(serveUpsertReqDTO.getRegionId());
            serve.setCityCode(region.getCityCode());
            baseMapper.insert(serve);
        }
    }

    @Override
    public Serve update(Long id, BigDecimal price) {
        //1.更新服务价格
        LambdaUpdateWrapper<Serve> updateWrapper = Wrappers.<Serve>lambdaUpdate()
                .eq(Serve::getId, id)
                .set(Serve::getPrice, price);
        super.update(updateWrapper);
        return baseMapper.selectById(id);
    }

    @Override
    @Transactional
    public Serve onSale(Long id) {
        //检查区域服务是否存在
        Serve serve = baseMapper.selectById(id);
        if (ObjectUtil.isNull(serve)) {
            throw new ForbiddenOperationException("区域服务不存在");
        }

        //草稿或下架状态方可上架
        Integer saleStatus = serve.getSaleStatus();
            if (!(saleStatus == FoundationStatusEnum.INIT.getStatus() || saleStatus == FoundationStatusEnum.DISABLE.getStatus())) {
            throw new ForbiddenOperationException("草稿或下架状态方可上架");
        }

        //服务项id
        Long serveItemId = serve.getServeItemId();
        ServeItem serveItem = serveItemMapper.selectById(serveItemId);
        if (ObjectUtil.isNull(serveItem)) {
            throw new ForbiddenOperationException("所属服务项不存在");
        }

        //服务项的启用状态
        Integer activeStatus = serveItem.getActiveStatus();
        //服务项为启用状态方可上架
        if (!(FoundationStatusEnum.ENABLE.getStatus() == activeStatus)) {
            throw new ForbiddenOperationException("服务项为启用状态方可上架");
        }



        //更新上架状态
        LambdaUpdateWrapper<Serve> updateWrapper = Wrappers.<Serve>lambdaUpdate()
                .eq(Serve::getId, id)
                .set(Serve::getSaleStatus, FoundationStatusEnum.ENABLE.getStatus());
        super.update(updateWrapper);
        return baseMapper.selectById(id);

    }

    @Override
    public Boolean delete(Long id) {
        int i = baseMapper.deleteById(id);
        if (i == 0) {
            throw new CommonException("删除区域服务失败");
        }
        return true;
    }

    @Override
    public Serve offSale(Long id) {
        //检查区域服务是否存在
        Serve serve = baseMapper.selectById(id);
        if (ObjectUtil.isNull(serve)) {
            throw new ForbiddenOperationException("区域服务不存在");
        }

        //草稿或下架状态方可上架
        Integer saleStatus = serve.getSaleStatus();
        if (saleStatus != FoundationStatusEnum.ENABLE.getStatus()) {
            throw new ForbiddenOperationException("只有上架状态方可下架");
        }

        LambdaUpdateWrapper<Serve> updateWrapper = Wrappers.<Serve>lambdaUpdate()
                .eq(Serve::getId, id)
                .set(Serve::getSaleStatus, FoundationStatusEnum.DISABLE.getStatus());
        super.update(updateWrapper);
        return baseMapper.selectById(id);
    }

    @Override
    public Serve onHot(Long id) {
        Serve serve = baseMapper.selectById(id);
        if (ObjectUtil.isNull(serve)) {
            throw new ForbiddenOperationException("区域服务不存在");
        }
        //更新设置热门
        LambdaUpdateWrapper<Serve> updateWrapper = Wrappers.<Serve>lambdaUpdate()
                .eq(Serve::getId, id)
                .set(Serve::getIsHot, FoundationHotEnum.HOT.getStatus());
        super.update(updateWrapper);
        return baseMapper.selectById(id);
    }

    @Override
    public Serve offHot(Long id) {
        Serve serve = baseMapper.selectById(id);
        if (ObjectUtil.isNull(serve)) {
            throw new ForbiddenOperationException("区域服务不存在");
        }
        //更新设置热门
        LambdaUpdateWrapper<Serve> updateWrapper = Wrappers.<Serve>lambdaUpdate()
                .eq(Serve::getId, id)
                .set(Serve::getIsHot, FoundationHotEnum.OFFHOT.getStatus());
        super.update(updateWrapper);
        return baseMapper.selectById(id);
    }


    /**
     * 根据区域id和售卖状态查询关联服务数量
     *
     * @param regionId   区域id
     * @param saleStatus 售卖状态，0：草稿，1下架，2上架。可传null，即查询所有状态
     * @return 服务数量
     */
    @Override
    public int queryServeCountByRegionIdAndSaleStatus(Long regionId, Integer saleStatus) {
        LambdaQueryWrapper<Serve> queryWrapper = Wrappers.<Serve>lambdaQuery()
                .eq(Serve::getRegionId, regionId)
                .eq(ObjectUtil.isNotEmpty(saleStatus), Serve::getSaleStatus, saleStatus);
        return baseMapper.selectCount(queryWrapper);
    }
    /**
     * 根据服务项id和售卖状态查询关联服务数量
     *
     * @param  serveItemId  服务项id
     * @param saleStatus 售卖状态，0：草稿，1下架，2上架。可传null，即查询所有状态
     * @return 服务数量
     */
    @Override
    public int queryServeCountByServeItemIdAndSaleStatus(Long serveItemId, Integer saleStatus) {
        LambdaQueryWrapper<Serve> queryWrapper = Wrappers.<Serve>lambdaQuery()
                .eq(Serve::getServeItemId, serveItemId)
                .eq(ObjectUtil.isNotEmpty(saleStatus), Serve::getSaleStatus, saleStatus);
        return baseMapper.selectCount(queryWrapper);
    }
}
