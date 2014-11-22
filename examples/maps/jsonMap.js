/**********************************************************************
 * This javascript is part of a Vehicle Traffic Simulator written 
 * entirely in Javascript, HTML and CSS.  The application allows for 
 * the creation of roadways upon which vehicles will travel and
 * attempt to avoid collisions with other vehicles while obeying the
 * rules of the road including traffic lights and speed limits
 * 
 * @Created: 04/09/2013
 * @Author: Jason Holt Smith (bicarbon8@gmail.com)
 * @Version: 0.2.0
 * Copyright (c) 2013 Jason Holt Smith. JsVehicleTrafficSimulator is 
 * distributed under the terms of the GNU General Public License.
 * 
 * This file is part of JsVehicleTrafficSimulator.
 * 
 * JsVehicleTrafficSimulator is free software: you can redistribute it 
 * and/or modify it under the terms of the GNU General Public License 
 * as published by the Free Software Foundation, either version 3 of 
 * the License, or (at your option) any later version.
 * 
 * JsVehicleTrafficSimulator is distributed in the hope that it will 
 * be useful, but WITHOUT ANY WARRANTY; without even the implied 
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  
 * See the GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with JsVehicleTrafficSimulator.  If not, see 
 * <http://www.gnu.org/licenses/>.
 **********************************************************************/
var jsonMap = {
    "mover":{
        "millisecondstep":2,
        "elapsedmillisec":0
    },
    "map":{
        "scale":1,
        "segments":[
            {
                "start":{
                    "x":16,
                    "y":194
                },
                "end":{
                    "x":194,
                    "y":194
                },
                "speedlimit":60,
                "roadname":"Jason Ave. N.",
                "stoplights":[],
                "vehicles":[],
                "preference":0,
                "isinlet":false
            },
            {
                "start":{
                    "x":194,
                    "y":194
                },
                "end":{
                    "x":194,
                    "y":106
                },
                "speedlimit":60,
                "roadname":"Jason Ave. N.",
                "stoplights":[],
                "vehicles":[],
                "preference":0,
                "isinlet":false
            },
            {
                "start":{
                    "x":194,
                    "y":106
                },
                "end":{
                    "x":16,
                    "y":106
                },
                "speedlimit":60,
                "roadname":"Jason Ave. N.",
                "stoplights":[],
                "vehicles":[],
                "preference":0,
                "isinlet":false
            },
            {
                "start":{
                    "x":16,
                    "y":106
                },
                "end":{
                    "x":16,
                    "y":194
                },
                "speedlimit":60,
                "roadname":"Jason Ave. N.",
                "stoplights":[],
                "vehicles":[],
                "preference":0,
                "isinlet":false
            },
            {
                "start":{
                    "x":10,
                    "y":200
                },
                "end":{
                    "x":106,
                    "y":200
                },
                "speedlimit":60,
                "roadname":"Jason Ave. N.",
                "stoplights":[],
                "vehicles":[],
                "preference":0,
                "isinlet":false
            },
            {
                "start":{
                    "x":106,
                    "y":200
                },
                "end":{
                    "x":200,
                    "y":200
                },
                "speedlimit":60,
                "roadname":"Jason Ave. N.",
                "stoplights":[],
                "vehicles":[],
                "preference":0,
                "isinlet":false
            },
            {
                "start":{
                    "x":200,
                    "y":200
                },
                "end":{
                    "x":200,
                    "y":100
                },
                "speedlimit":60,
                "roadname":"Jason Ave. N.",
                "stoplights":[],
                "vehicles":[],
                "preference":0,
                "isinlet":false
            },
            {
                "start":{
                    "x":200,
                    "y":100
                },
                "end":{
                    "x":10,
                    "y":100
                },
                "speedlimit":60,
                "roadname":"Jason Ave. N.",
                "stoplights":[],
                "vehicles":[],
                "preference":0,
                "isinlet":false
            },
            {
                "start":{
                    "x":10,
                    "y":100
                },
                "end":{
                    "x":10,
                    "y":200
                },
                "speedlimit":60,
                "roadname":"Jason Ave. N.",
                "stoplights":[],
                "vehicles":[],
                "preference":0,
                "isinlet":false
            },
            {
                "start":{
                    "x":10,
                    "y":200
                },
                "end":{
                    "x":10,
                    "y":206
                },
                "speedlimit":60,
                "roadname":"Jason Ave. N.",
                "stoplights":[],
                "vehicles":[],
                "preference":0,
                "isinlet":false
            },
            {
                "start":{
                    "x":10,
                    "y":206
                },
                "end":{
                    "x":50,
                    "y":206
                },
                "speedlimit":35,
                "roadname":"On Ramp",
                "stoplights":[
                    {
                        "location":{
                            "x":50,
                            "y":206
                        },
                        "changeseconds":5,
                        "startstate":0
                    }
                ],
                "vehicles":[],
                "preference":0,
                "isinlet":true
            },
            {
                "start":{
                    "x":50,
                    "y":206
                },
                "end":{
                    "x":100,
                    "y":206
                },
                "speedlimit":35,
                "roadname":"Jason Ave. N.",
                "stoplights":[],
                "vehicles":[],
                "preference":0,
                "isinlet":false
            },
            {
                "start":{
                    "x":100,
                    "y":206
                },
                "end":{
                    "x":106,
                    "y":200
                },
                "speedlimit":60,
                "roadname":"Jason Ave. N.",
                "stoplights":[],
                "vehicles":[],
                "preference":0,
                "isinlet":false
            }
        ]
    }
}