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
var JSVTS = JSVTS || {};
JSVTS.roadways = JSVTS.roadways || [];
JSVTS.roadways.push({
    "map":{
        "segments":[
            { /** inner-bottom **/
                "start":{
                    "x":33, // x axis is left/right
                    "y":0, // y axis is vertically up/down
                    "z":97 // z axis is horizontally up/down
                },
                "end":{
                    "x":177, // 194
                    "y":0,
                    "z":97
                },
                "speedlimit":60,
                "roadname":"Jason Ave. N.",
                "isinlet":false,
                "ismergelane": false
            },
            {
                "start":{
                    "x":177,
                    "y":0,
                    "z":97
                },
                "end":{
                    "x":197,
                    "y":0,
                    "z":77
                },
                "speedlimit":60,
                "roadname":"Jason Ave. N.",
                "isinlet":false,
                "ismergelane": false
            },
            { /** inner-right **/
                "start":{
                    "x":197,
                    "y":0,
                    "z":77 // 94
                },
                "end":{
                    "x":197,
                    "y":0,
                    "z":23 // 6
                },
                "speedlimit":60,
                "roadname":"Jason Ave. N.",
                "isinlet":false,
                "ismergelane": false
            }
        ]
    }
});