/*
 *                "Copyright 2020 Infosys Ltd.
 *                Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
 *                This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"
 *
 */
package com.infosys.hubservices.controller;

import com.infosys.hubservices.model.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/network/hub")
public class NetworkHubController {


    @PostMapping("/find/recommended/connections")
    public ResponseEntity<Response> findRecommendedConnection(@RequestHeader String rootOrg, @RequestHeader String org,
                                                 @RequestParam(defaultValue = "5", required = false, name = "pageSize") int pageSize,
                                                 @RequestParam(defaultValue = "0", required = false, name = "pageNo") int pageNo,
                                                 @RequestBody Map<String,Object> request){

        Response response = null;
        return new ResponseEntity<Response>(response, HttpStatus.OK);

    }

    @PostMapping("/find/common/connections")
    public ResponseEntity<Response> findCommonConnections(@RequestHeader String rootOrg, @RequestHeader String org,
                                                 @RequestParam(defaultValue = "5", required = false, name = "pageSize") int pageSize,
                                                 @RequestParam(defaultValue = "0", required = false, name = "pageNo") int pageNo,
                                                 @RequestBody Map<String,Object> request){

        Response response = null;
        return new ResponseEntity<Response>(response, HttpStatus.OK);

    }


    @GetMapping("/fetch/connections")
    public ResponseEntity<Response> findConnections(@RequestHeader(required = true) String rootOrg, @RequestHeader(required = true) String org,
                                                        @RequestHeader String userId,
                                                        @RequestParam(defaultValue = "5", required = false, name = "pageSize") int pageSize,
                                                        @RequestParam(defaultValue = "0", required = false, name = "pageNo") int pageNo) {

        Response response = null;
        return new ResponseEntity<Response>(response, HttpStatus.OK);

    }

}