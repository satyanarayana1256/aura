/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
({
    handleDataChange: function(component, event) {
        var newData = event.getParam("data");
        var items = component.getConcreteComponent().getValue("v.items");
        var actualItems = items.unwrap();
        
        for (var i=0, len=newData.length; i<len; i++) {
            actualItems.push(newData[i]);
        }
        
        items.setValue(actualItems);
    }
})