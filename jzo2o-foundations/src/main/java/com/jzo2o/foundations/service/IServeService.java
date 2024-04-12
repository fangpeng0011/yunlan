package com.jzo2o.foundations.service;

import com.jzo2o.common.model.PageResult;
import com.jzo2o.foundations.model.domain.Serve;
import com.baomidou.mybatisplus.extension.service.IService;
import com.jzo2o.foundations.model.dto.request.ServePageQueryReqDTO;
import com.jzo2o.foundations.model.dto.request.ServeUpsertReqDTO;
import com.jzo2o.foundations.model.dto.response.ServeResDTO;

import java.math.BigDecimal;
import java.util.List;

/**
 * <p>
 * 服务表 服务类
 * </p>
 *
 * @author itcast
 * @since 2023-12-06
 */
public interface IServeService extends IService<Serve> {

    /**
     * 区域服务分页查询
     *
     * @param servePageQueryReqDTO
     * @return
     */
    PageResult<ServeResDTO> page(ServePageQueryReqDTO servePageQueryReqDTO);

    /**
     * 批量新增
     *
     * @param serveUpsertReqDTOList 批量新增数据
     */
    void batchAdd(List<ServeUpsertReqDTO> serveUpsertReqDTOList);


    /**
     * 服务价格修改
     *
     * @param id    服务id
     * @param price 价格
     * @return 服务
     */
    Serve update(Long id, BigDecimal price);

    /**
     * 上架
     *
     * @param id 服务id
     */
    Serve onSale(Long id);

    /**
     * 删除区域服务
     *
     * @param id
     * @return 服务
     */
    Boolean delete(Long id);

    /**
     * 服务下架
     *
     * @param id
     * @return
     */
    Serve offSale(Long id);

    /**
     * 设置热门开发
     *
     * @param id
     * @return
     */
    Serve onHot(Long id);

    /**
     * 取消热门开发
     *
     * @param id
     * @return
     */
    Serve offHot(Long id);

    int queryServeCountByRegionIdAndSaleStatus(Long regionId, Integer saleStatus);

    int queryServeCountByServeItemIdAndSaleStatus(Long serveItemId, Integer saleStatus);
}
