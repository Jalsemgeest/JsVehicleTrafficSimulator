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
            // Gardiner
            { /** inner-bottom **/
                "start":{
                    "x":200, // x axis is left/right
                    "y":50, // y axis is vertically up/down
                    "z":200 // z axis is horizontally up/down
                },

                "end":{
                    "x":300, // 194
                    "y":50,
                    "z":200
                },
                // "tfc": {
                //     "type":"stoplight",
                //     "greenduration":1,
                //     "redduration":5,
                //     "yellowduration":0,
                //     "startstate":0
                // },
                "speedlimit":100,
                "roadname":"Gardiner Expressway 1",
                "isinlet":true,
                "ismergelane": false,
                "generator": {
                    "delay":10
                },
            },
            { /** inner-bottom **/
                "start":{
                    "x":295, // 194
                    "y":50,
                    "z":200
                },
                "end":{
                    "x":300, // 194
                    "y":50,
                    "z":190
                },
                "speedlimit":40,
                "roadname":"Gardiner Expressway 2",
                "isinlet":true,
                "ismergelane": true,
            },

            { /** inner-bottom **/
                "start":{
                    "x":305, // 194
                    "y":50,
                    "z":190
                },
                "end":{
                    "x":310, // 194
                    "y":50,
                    "z":200
                },
                "speedlimit":40,
                "roadname":"Gardiner Expressway 2.5",
                "isinlet":true,
                "ismergelane": true,
            },

            {
                "start":{
                    "x":300,
                    "y":50,
                    "z":200
                },
                "end":{
                    "x":420,
                    "y":50,
                    "z":200
                },
                "speedlimit":100,
                "roadname":"Gardiner Expressway 3",
                "isinlet":false,
                "ismergelane": false
            },
            {
                "start":{
                    "x":420,
                    "y":50,
                    "z":200
                },
                "end":{
                    "x":480,
                    "y":50,
                    "z":200
                },
                "speedlimit":100,
                "roadname":"Gardiner Expressway 4",
                "isinlet":false,
                "ismergelane": false
            },
            {
                "start":{
                    "x":480,
                    "y":50,
                    "z":200
                },
                "end":{
                    "x":510,
                    "y":50,
                    "z":190
                },
                "speedlimit":100,
                "roadname":"Gardiner Expressway 5",
                "isinlet":false,
                "ismergelane": false
            },
            {
                "start":{
                    "x":510,
                    "y":50,
                    "z":190
                },
                "end":{
                    "x":550,
                    "y":50,
                    "z":170
                },
                "speedlimit":100,
                "roadname":"Gardiner Expressway 6",
                "isinlet":false,
                "ismergelane": false
            },
            {
                "start":{
                    "x":200,
                    "y":50,
                    "z":190 
                },
                "end":{
                    "x":500,
                    "y":50,
                    "z":190
                },
                "speedlimit":100,
                "roadname":"Gardiner Expressway 7",
                "isinlet":true,
                "ismergelane": true,
                "generator": {
                    "delay":10
                },
            },
            {
                "start":{
                    "x":500,
                    "y":50,
                    "z":190
                },
                "end":{
                    "x":550,
                    "y":50,
                    "z":165
                },
                "speedlimit":100,
                "roadname":"Gardiner Expressway 8.5",
                "isinlet":false,
                "ismergelane": true,
            },
            {
                "start":{
                    "x":550,
                    "y":50,
                    "z":165
                },
                "end":{
                    "x":700,
                    "y":50,
                    "z":165
                },
                "speedlimit":100,
                "roadname":"Gardiner Expressway EAST 1",
                "isinlet":false,
                "ismergelane": true,
            },
            {
                "start":{
                    "x":550,
                    "y":50,
                    "z":170
                },
                "end":{
                    "x":700,
                    "y":50,
                    "z":170
                },
                "speedlimit":100,
                "roadname":"Gardiner Expressway EAST 2",
                "isinlet":false,
                "ismergelane": false
            },

            // Off Ramp 2
            {
                "start":{
                    "x":510,
                    "y":50,
                    "z":190
                },
                "end":{
                    "x":580,
                    "y":45,
                    "z":180
                },
                "speedlimit":60,
                "roadname":"Off Ramp. 2",
                "isinlet":true,
                "ismergelane": true
            },
            {
                "start":{
                    "x":580,
                    "y":45,
                    "z":180
                },
                "end":{
                    "x":590,
                    "y":43,
                    "z":185
                },
                "speedlimit":40,
                "roadname":"Off Ramp cont.",
                "isinlet":true,
                "ismergelane": true
            },
            {
                "start":{
                    "x":590,
                    "y":43,
                    "z":185
                },
                "end":{
                    "x":595,
                    "y":41,
                    "z":189
                },
                "speedlimit":40,
                "roadname":"Off Ramp cont.",
                "isinlet":true,
                "ismergelane": true
            },
            {
                "start":{
                    "x":595,
                    "y":41,
                    "z":189
                },
                "end":{
                    "x":598,
                    "y":38,
                    "z":195
                },
                "speedlimit":40,
                "roadname":"Off Ramp cont.",
                "isinlet":true,
                "ismergelane": true
            },
            {
                "start":{
                    "x":598,
                    "y":38,
                    "z":195
                },
                "end":{
                    "x":598,
                    "y":35,
                    "z":200
                },
                "speedlimit":40,
                "roadname":"Off Ramp cont.",
                "isinlet":true,
                "ismergelane": true
            },
            {
                "start":{
                    "x":598,
                    "y":35,
                    "z":200
                },
                "end":{
                    "x":595,
                    "y":32,
                    "z":205
                },
                "speedlimit":40,
                "roadname":"Off Ramp cont.",
                "isinlet":true,
                "ismergelane": true
            },
            {
                "start":{
                    "x":595,
                    "y":32,
                    "z":205
                },
                "end":{
                    "x":590,
                    "y":28,
                    "z":206
                },
                "speedlimit":40,
                "roadname":"Off Ramp cont.",
                "isinlet":true,
                "ismergelane": true
            },
            {
                "start":{
                    "x":590,
                    "y":28,
                    "z":206
                },
                "end":{
                    "x":580,
                    "y":23,
                    "z":205
                },
                "speedlimit":40,
                "roadname":"Off Ramp cont.",
                "isinlet":true,
                "ismergelane": true
            },
            {
                "start":{
                    "x":580,
                    "y":23,
                    "z":205
                },
                "end":{
                    "x":575,
                    "y":18,
                    "z":200
                },
                "speedlimit":40,
                "roadname":"Off Ramp cont. New",
                "isinlet":true,
                "ismergelane": true
            },
            {
                "start":{
                    "x":575,
                    "y":18,
                    "z":200
                },
                "end":{
                    "x":570,
                    "y":13,
                    "z":195
                },
                "speedlimit":40,
                "roadname":"Off Ramp cont. NEW 2",
                "isinlet":true,
                "ismergelane": true
            },
            {
                "start":{
                    "x":570,
                    "y":13,
                    "z":195
                },
                "end":{
                    "x":565,
                    "y":8,
                    "z":185
                },
                "speedlimit":40,
                "roadname":"Off Ramp cont. NEW 3",
                "isinlet":true,
                "ismergelane": true,
            },
            {
                "start":{
                    "x":565,
                    "y":8,
                    "z":185
                },
                "end":{
                    "x":560,
                    "y":0,
                    "z":165
                },
                "speedlimit":40,
                "roadname":"Off Ramp cont. NEW 4",
                "isinlet":true,
                "ismergelane": true,
                "tfc": {
                    "type":"stoplight",
                    "greenduration":8,
                    "redduration":5,
                    "yellowduration":1,
                    "startstate":0
                },
            },


            // Off Ramp
            { /** inner-right **/
                "start":{
                    "x":300,
                    "y":50,
                    "z":200
                },
                "end":{
                    "x":310,
                    "y":45,
                    "z":205 // 6
                },
                "speedlimit":40,
                "roadname":"Off ramp",
                "isinlet":true,
                "ismergelane": true
            },
            { /** inner-right **/
                "start":{
                    "x":310,
                    "y":45,
                    "z":205 // 6
                },
                "end":{
                    "x":380,
                    "y":15,
                    "z":205 // 6
                },
                "speedlimit":40,
                "roadname":"Off ramp cont.",
                "isinlet":false,
                "ismergelane": false
            },
            { /** inner-right **/
                "start":{
                    "x":380,
                    "y":15,
                    "z":205 // 6
                },
                "end":{
                    "x":420,
                    "y":0,
                    "z":205 // 6
                },
                "tfc": {
                    "type":"stoplight",
                    "greenduration":8,
                    "redduration":5,
                    "yellowduration":1,
                    "startstate":0
                },
                "speedlimit":40,
                "roadname":"Off ramp cont.",
                "isinlet":false,
                "ismergelane": false
            },

            // Spadina
            { /** inner-right **/
                "start":{
                    "x":420,
                    "y":0,
                    "z":205 // 6
                },
                "end":{
                    "x":420,
                    "y":0,
                    "z":120 // 6
                },
                "speedlimit":40,
                "roadname":"Spadina.",
                "isinlet":true,
                "ismergelane": true
            },

            // YORK
            {
                "start":{
                    "x":560,
                    "y":0,
                    "z":165
                },
                "end":{
                    "x":565,
                    "y":0,
                    "z":60
                },
                "speedlimit":40,
                "roadname":"York",
                "isinlet":true,
                "ismergelane": true,
            },
        ]
    }
});