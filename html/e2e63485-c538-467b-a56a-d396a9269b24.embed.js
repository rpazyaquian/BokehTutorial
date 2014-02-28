console.log("embed.js");
// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
(function(global) {
    if(typeof(window.bokeh_embed_count) == "undefined"){
        window.bokeh_embed_count = 0;
    }
    else {
        window.bokeh_embed_count += 1;
    }
    if(window.bokeh_embed_count == 1) {
//        debugger;
    }
    var host = "";

    var staticRootUrl = "../static/";
    if (host!=""){

        staticRootUrl = "//" + host + "/bokehjs/static/";
        var bokehJSUrl = staticRootUrl + "js/bokeh.js";
    }
    else {
        bokehJSUrl = staticRootUrl +"js/bokeh.js";
    }

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "e2e63485-c538-467b-a56a-d396a9269b24"}, "major_tick_line_color": "white", "axis_line_color": null, "major_tick_in": 10, "bounds": "auto", "id": "1fa93f5f-c7a1-41f0-948b-5766d3cb72dd", "major_label_standoff": 10, "doc": null, "location": "min", "major_label_text_font_style": "bold", "major_label_orientation": 0.7853981633974483, "major_label_text_font_size": "12pt", "dimension": 0, "major_tick_out": 0}, "type": "CategoricalAxis", "id": "1fa93f5f-c7a1-41f0-948b-5766d3cb72dd"}, {"attributes": {"plot": {"type": "Plot", "id": "e2e63485-c538-467b-a56a-d396a9269b24"}, "doc": null, "dimensions": ["width", "height"], "id": "939fb881-21f6-443d-becc-fe356e2e061b"}, "type": "PanTool", "id": "939fb881-21f6-443d-becc-fe356e2e061b"}, {"attributes": {"plot": {"type": "Plot", "id": "e2e63485-c538-467b-a56a-d396a9269b24"}, "grid_line_color": "white", "doc": null, "is_datetime": false, "id": "60da6c63-97f9-4c35-8337-9eade47db6e2", "grid_line_width": 2, "dimension": 1}, "type": "Grid", "id": "60da6c63-97f9-4c35-8337-9eade47db6e2"}, {"attributes": {"plot": {"type": "Plot", "id": "e2e63485-c538-467b-a56a-d396a9269b24"}, "doc": null, "dimensions": ["width", "height"], "id": "f94ef28d-6f62-4f82-9720-f87ce09420f6"}, "type": "WheelZoomTool", "id": "f94ef28d-6f62-4f82-9720-f87ce09420f6"}, {"attributes": {"plot": {"type": "Plot", "id": "e2e63485-c538-467b-a56a-d396a9269b24"}, "axis_line_color": null, "doc": null, "bounds": "auto", "id": "5249f55f-9e06-4b50-95ed-f3e66c1f3be5", "major_label_standoff": 10, "location": "min", "major_label_text_font_style": "bold", "major_label_text_font_size": "12pt", "dimension": 1}, "type": "LinearAxis", "id": "5249f55f-9e06-4b50-95ed-f3e66c1f3be5"}, {"attributes": {"plot": {"type": "Plot", "id": "e2e63485-c538-467b-a56a-d396a9269b24"}, "doc": null, "is_datetime": false, "dimension": 0, "id": "d988ba89-b4ef-4625-8cc4-607d8e7c31a6"}, "type": "Grid", "id": "d988ba89-b4ef-4625-8cc4-607d8e7c31a6"}, {"attributes": {"start": 0, "end": 800, "id": "e7b069f2-69fd-4ba2-afc3-1312761aabce", "doc": null}, "type": "Range1d", "id": "e7b069f2-69fd-4ba2-afc3-1312761aabce"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "e2e63485-c538-467b-a56a-d396a9269b24"}], "id": "f9e22526-db27-4414-bb68-dc772b5fd0e6"}, "type": "PlotContext", "id": "f9e22526-db27-4414-bb68-dc772b5fd0e6"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "66b374a0-80bf-4d7c-bd32-d1c5c596e6c5"}, "doc": null, "id": "4ff6bd63-fa69-443e-bd41-e6cf1a57654d", "xdata_range": null, "ydata_range": null, "glyphspec": {"line_color": {"value": null}, "line_alpha": {"units": "data", "value": 0.8}, "fill_color": {"units": "data", "field": "fill_color"}, "x_range": ["ousia", "poson", "poion", "pros ti", "pou", "pote", "keisthai", "echein", "poiein", "paschein"], "title": "Categories of Brewering", "background_fill": "lightgrey", "fill_alpha": {"units": "data", "value": 0.8}, "text_alpha": 0.8, "text_color": "black", "type": "patches", "xs": {"units": "data", "field": "xs"}, "ys": {"units": "data", "field": "ys"}, "line_width": {"units": "data", "field": "line_width"}, "y_range": {"type": "Range1d", "id": "e7b069f2-69fd-4ba2-afc3-1312761aabce"}}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": {"units": "data", "field": "line_width"}, "angle_units": "deg", "type": "patches", "fill_color": {"value": "#1f77b4"}, "line_alpha": {"units": "data", "value": 0.1}, "valign": null, "start_angle_units": "deg", "margin": null, "fill_alpha": {"units": "data", "value": 0.1}, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "xs": {"units": "data", "field": "xs"}, "ys": {"units": "data", "field": "ys"}, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "4ff6bd63-fa69-443e-bd41-e6cf1a57654d"}, {"attributes": {"column_names": ["fill_color", "xs", "ys"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"xs": [["paschein", "poiein", "echein", "keisthai", "pote", "pou", "pros ti", "poion", "poson", "ousia", "ousia", "poson", "poion", "pros ti", "pou", "pote", "keisthai", "echein", "poiein", "paschein"], ["paschein", "poiein", "echein", "keisthai", "pote", "pou", "pros ti", "poion", "poson", "ousia", "ousia", "poson", "poion", "pros ti", "pou", "pote", "keisthai", "echein", "poiein", "paschein"], ["paschein", "poiein", "echein", "keisthai", "pote", "pou", "pros ti", "poion", "poson", "ousia", "ousia", "poson", "poion", "pros ti", "pou", "pote", "keisthai", "echein", "poiein", "paschein"], ["paschein", "poiein", "echein", "keisthai", "pote", "pou", "pros ti", "poion", "poson", "ousia", "ousia", "poson", "poion", "pros ti", "pou", "pote", "keisthai", "echein", "poiein", "paschein"], ["paschein", "poiein", "echein", "keisthai", "pote", "pou", "pros ti", "poion", "poson", "ousia", "ousia", "poson", "poion", "pros ti", "pou", "pote", "keisthai", "echein", "poiein", "paschein"], ["paschein", "poiein", "echein", "keisthai", "pote", "pou", "pros ti", "poion", "poson", "ousia", "ousia", "poson", "poion", "pros ti", "pou", "pote", "keisthai", "echein", "poiein", "paschein"], ["paschein", "poiein", "echein", "keisthai", "pote", "pou", "pros ti", "poion", "poson", "ousia", "ousia", "poson", "poion", "pros ti", "pou", "pote", "keisthai", "echein", "poiein", "paschein"], ["paschein", "poiein", "echein", "keisthai", "pote", "pou", "pros ti", "poion", "poson", "ousia", "ousia", "poson", "poion", "pros ti", "pou", "pote", "keisthai", "echein", "poiein", "paschein"], ["paschein", "poiein", "echein", "keisthai", "pote", "pou", "pros ti", "poion", "poson", "ousia", "ousia", "poson", "poion", "pros ti", "pou", "pote", "keisthai", "echein", "poiein", "paschein"], ["paschein", "poiein", "echein", "keisthai", "pote", "pou", "pros ti", "poion", "poson", "ousia", "ousia", "poson", "poion", "pros ti", "pou", "pote", "keisthai", "echein", "poiein", "paschein"]], "ys": [[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 40.0, 49.0, 57.0, 85.0, 80.0, 31.0, 96.0, 40.0, 63.0, 25.0], [25.0, 63.0, 40.0, 96.0, 31.0, 80.0, 85.0, 57.0, 49.0, 40.0, 106.0, 71.0, 133.0, 118.0, 148.0, 59.0, 118.0, 123.0, 156.0, 92.0], [92.0, 156.0, 123.0, 118.0, 59.0, 148.0, 118.0, 133.0, 71.0, 106.0, 171.0, 94.0, 196.0, 138.0, 170.0, 150.0, 204.0, 196.0, 213.0, 112.0], [112.0, 213.0, 196.0, 204.0, 150.0, 170.0, 138.0, 196.0, 94.0, 171.0, 254.0, 107.0, 285.0, 170.0, 220.0, 210.0, 260.0, 215.0, 266.0, 197.0], [197.0, 266.0, 215.0, 260.0, 210.0, 220.0, 170.0, 285.0, 107.0, 254.0, 281.0, 146.0, 304.0, 223.0, 303.0, 269.0, 294.0, 297.0, 307.0, 243.0], [243.0, 307.0, 297.0, 294.0, 269.0, 303.0, 223.0, 304.0, 146.0, 281.0, 318.0, 222.0, 339.0, 285.0, 377.0, 288.0, 316.0, 346.0, 390.0, 254.0], [254.0, 390.0, 346.0, 316.0, 288.0, 377.0, 285.0, 339.0, 222.0, 318.0, 404.0, 305.0, 375.0, 381.0, 390.0, 300.0, 398.0, 364.0, 466.0, 324.0], [324.0, 466.0, 364.0, 398.0, 300.0, 390.0, 381.0, 375.0, 305.0, 404.0, 492.0, 330.0, 428.0, 435.0, 470.0, 393.0, 411.0, 408.0, 478.0, 365.0], [365.0, 478.0, 408.0, 411.0, 393.0, 470.0, 435.0, 428.0, 330.0, 492.0, 540.0, 343.0, 486.0, 530.0, 499.0, 456.0, 473.0, 430.0, 499.0, 441.0], [441.0, 499.0, 430.0, 473.0, 456.0, 499.0, 530.0, 486.0, 343.0, 540.0, 565.0, 381.0, 523.0, 569.0, 521.0, 493.0, 520.0, 465.0, 520.0, 525.0]], "fill_color": ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"]}, "id": "66b374a0-80bf-4d7c-bd32-d1c5c596e6c5"}, "type": "ColumnDataSource", "id": "66b374a0-80bf-4d7c-bd32-d1c5c596e6c5"}, {"attributes": {"plot": {"type": "Plot", "id": "e2e63485-c538-467b-a56a-d396a9269b24"}, "id": "63bd5146-37ba-45bd-92a2-2bcd4485ff29", "doc": null}, "type": "ResizeTool", "id": "63bd5146-37ba-45bd-92a2-2bcd4485ff29"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "4ff6bd63-fa69-443e-bd41-e6cf1a57654d"}], "id": "6b5946e3-16a4-4a41-9c3d-53749a7da861"}, "type": "BoxSelectTool", "id": "6b5946e3-16a4-4a41-9c3d-53749a7da861"}, {"attributes": {"doc": null, "id": "a0431f7f-0f30-49cf-a4b3-4c97375a31a9", "factors": ["ousia", "poson", "poion", "pros ti", "pou", "pote", "keisthai", "echein", "poiein", "paschein"]}, "type": "FactorRange", "id": "a0431f7f-0f30-49cf-a4b3-4c97375a31a9"}, {"attributes": {"plot": {"type": "Plot", "id": "e2e63485-c538-467b-a56a-d396a9269b24"}, "id": "4d25400f-3c3c-471d-bc9f-bb4a7d87d903", "doc": null}, "type": "ResetTool", "id": "4d25400f-3c3c-471d-bc9f-bb4a7d87d903"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "6b5946e3-16a4-4a41-9c3d-53749a7da861"}, "id": "805bfaf9-8482-4e51-b4fe-8055c398d9d4"}, "type": "BoxSelection", "id": "805bfaf9-8482-4e51-b4fe-8055c398d9d4"}, {"attributes": {"doc": null, "tool": {"type": "BoxZoomTool", "id": "62f7af49-6b5a-4696-a764-6f4f6e958935"}, "id": "7d611a36-422b-4e78-ae13-e1166a82c5c4"}, "type": "BoxSelection", "id": "7d611a36-422b-4e78-ae13-e1166a82c5c4"}, {"attributes": {"x_range": {"type": "FactorRange", "id": "a0431f7f-0f30-49cf-a4b3-4c97375a31a9"}, "background_fill": "lightgrey", "title": "Categories of Brewering", "y_range": {"type": "Range1d", "id": "e7b069f2-69fd-4ba2-afc3-1312761aabce"}, "outer_width": 600, "renderers": [{"type": "CategoricalAxis", "id": "1fa93f5f-c7a1-41f0-948b-5766d3cb72dd"}, {"type": "LinearAxis", "id": "5249f55f-9e06-4b50-95ed-f3e66c1f3be5"}, {"type": "Grid", "id": "d988ba89-b4ef-4625-8cc4-607d8e7c31a6"}, {"type": "Grid", "id": "60da6c63-97f9-4c35-8337-9eade47db6e2"}, {"type": "BoxSelection", "id": "7d611a36-422b-4e78-ae13-e1166a82c5c4"}, {"type": "BoxSelection", "id": "805bfaf9-8482-4e51-b4fe-8055c398d9d4"}, {"type": "Glyph", "id": "4ff6bd63-fa69-443e-bd41-e6cf1a57654d"}], "outer_height": 600, "doc": null, "axes": [], "canvas_height": 600, "id": "e2e63485-c538-467b-a56a-d396a9269b24", "tools": [{"type": "PanTool", "id": "939fb881-21f6-443d-becc-fe356e2e061b"}, {"type": "WheelZoomTool", "id": "f94ef28d-6f62-4f82-9720-f87ce09420f6"}, {"type": "BoxZoomTool", "id": "62f7af49-6b5a-4696-a764-6f4f6e958935"}, {"type": "PreviewSaveTool", "id": "af46582b-0079-4945-9623-c900572d5d52"}, {"type": "ResizeTool", "id": "63bd5146-37ba-45bd-92a2-2bcd4485ff29"}, {"type": "BoxSelectTool", "id": "6b5946e3-16a4-4a41-9c3d-53749a7da861"}, {"type": "ResetTool", "id": "4d25400f-3c3c-471d-bc9f-bb4a7d87d903"}], "canvas_width": 600}, "type": "Plot", "id": "e2e63485-c538-467b-a56a-d396a9269b24"}, {"attributes": {"plot": {"type": "Plot", "id": "e2e63485-c538-467b-a56a-d396a9269b24"}, "dataranges": [], "id": "af46582b-0079-4945-9623-c900572d5d52", "doc": null}, "type": "PreviewSaveTool", "id": "af46582b-0079-4945-9623-c900572d5d52"}, {"attributes": {"plot": {"type": "Plot", "id": "e2e63485-c538-467b-a56a-d396a9269b24"}, "id": "62f7af49-6b5a-4696-a764-6f4f6e958935", "doc": null}, "type": "BoxZoomTool", "id": "62f7af49-6b5a-4696-a764-6f4f6e958935"}];
    var modeltype = "PlotContext";
    var elementid = "29146ec6-38c6-45d3-8f91-82b2236216f8";
    var plotID = "e2e63485-c538-467b-a56a-d396a9269b24";
    var dd = {};
    dd[plotID] = all_models;
    

    var secondPlot =                 function() {
        console.log("Bokeh.js loaded callback");
        embed_core = Bokeh.embed_core;
        console.log("embed_core loaded");
        embed_core.injectCss(staticRootUrl);
        Bokeh.HasProperties.prototype.sync = Backbone.sync
        embed_core.search_and_plot(dd);
        console.log("search_and_plot called", new Date());}

    function addEvent(el, eventName, func){
        if(el.attachEvent){
            return el.attachEvent('on' + eventName, func);}
        else {
            el.addEventListener(eventName, func, false);}}
    var script_injected = !(typeof(_embed_bokeh_inject_application) == "undefined") && _embed_bokeh_inject_application;
    //var script_injected = !(typeof(_embed_bokeh_inject_application) == "undefined");
    if(typeof Bokeh == "object"){
        // application.js is already loaded
        console.log("bokeh.js is already loaded, going straight to plotting");
        setTimeout(function () {
            embed_core = Bokeh.embed_core;
            console.log("calling embed_core.search_and_plot, from already loaded bokehjs state")
            embed_core.search_and_plot(dd);}, 20);}

    else if(!script_injected){
        // bokeh.js isn't loaded and it hasn't been scheduled to be injected
        var s = document.createElement('script');
        s.async = true; s.src = bokehJSUrl; s.id="bokeh_script_tag";
        
    }
    else {
        var s = document.getElementById("bokeh_script_tag");
    }
    var local_bokeh_embed_count = window.bokeh_embed_count;
    if(typeof(s) != "undefined") {
    addEvent(
        s,'load',
        function() {
            setTimeout(secondPlot, 20 * local_bokeh_embed_count);});
    }
    if(!script_injected){
        document.body.appendChild(s);
    }

    _embed_bokeh_inject_application = true;

    window._embed_bokeh = true;}(this));