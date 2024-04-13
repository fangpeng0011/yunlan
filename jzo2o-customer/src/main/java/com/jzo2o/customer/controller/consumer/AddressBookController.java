package com.jzo2o.customer.controller.consumer;


import cn.hutool.core.bean.BeanUtil;
import com.jzo2o.api.customer.dto.response.AddressBookResDTO;
import com.jzo2o.common.model.PageResult;
import com.jzo2o.customer.model.domain.AddressBook;
import com.jzo2o.customer.model.dto.request.AddressBookPageQueryReqDTO;
import com.jzo2o.customer.model.dto.request.AddressBookUpsertReqDTO;
import com.jzo2o.customer.service.IAddressBookService;
import com.jzo2o.mvc.utils.UserContext;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.validation.constraints.NotNull;
import java.util.List;

/**
 * <p>
 * 地址薄 前端控制器
 * </p>
 *
 * @author itcast
 * @since 2023-07-06
 */
@RestController("consumerAddressBookController")
@RequestMapping("/consumer/address-book")
@Api(tags = "用户端 - 地址薄相关接口")
public class AddressBookController {
    @Resource
    private IAddressBookService addressBookService;

    @DeleteMapping("/batch")
    @ApiOperation("地址薄批量删除")
    @ApiImplicitParam(name = "ids", value = "地址薄id列表", required = true, dataTypeClass = List.class)
    public void logicallyDelete(@NotNull(message = "id列表不能为空") @RequestBody List<Long> ids) {
        addressBookService.removeByIds(ids);
    }

}
