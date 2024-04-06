package com.jzo2o.foundations.service;

import com.jzo2o.common.model.PageResult;
import com.jzo2o.foundations.model.domain.Serve;
import com.baomidou.mybatisplus.extension.service.IService;
import com.jzo2o.foundations.model.dto.request.ServePageQueryReqDTO;
import com.jzo2o.foundations.model.dto.response.ServeResDTO;

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
     * @param servePageQueryReqDTO
     * @return
     */
    PageResult<ServeResDTO> page(ServePageQueryReqDTO servePageQueryReqDTO);

}
