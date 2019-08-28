(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n.activity-detail {\n  padding-top: 2rem;\n  padding-bottom: 2rem; }\n/**********Form Layout (main Tab, Left Menu & Center Content) Start************/\n.detail-container {\n  padding: 2%;\n  padding-top: 0;\n  /* min-height:1000px; */\n  overflow: unset;\n  margin-top: 0.5rem; }\n.template-fields-container {\n  margin-top: 3rem; }\n.left-menu-container {\n  float: left;\n  width: 15%;\n  margin-top: 4rem; }\n.left-menu-absolute {\n  position: absolute;\n  width: 14%; }\n/* This width is closely interpretted to the 15% width of the left-menu-container. \nSince the fixed position takes the relative width of the document window itself this is approximated to the detail container width */\n.left-menu-fixed {\n  position: fixed;\n  width: 14%;\n  top: 3rem; }\n.center-content-withleftmenu {\n  float: left;\n  width: 83%;\n  margin-left: 2%; }\n.comp-toggle-img {\n  margin-left: 1rem; }\n.actions-container {\n  height: 4rem;\n  margin: 0;\n  display: flex;\n  justify-content: space-between;\n  padding-top: 0.5rem; }\n.actions-container h3 {\n    flex: 8;\n    padding: 0;\n    margin: 0;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    margin-right: 1rem; }\n.actions-container .actions-status {\n    flex: 2;\n    text-align: right;\n    padding-top: .5rem; }\n.actions-container .actions-options {\n    /* flex: 1;  */\n    text-align: right;\n    position: relative; }\n.actions-container .actions-options .actions-dropdown {\n      /* position properties and width as per needed for the actions container */\n      text-align: left;\n      top: 2.5rem;\n      right: -2.8rem;\n      width: 7rem; }\n.actions-container .button-act-cancel {\n    background-size: 2.5rem 2.5rem;\n    margin-top: 0.5rem; }\n.left-nav-current {\n  border-left: 0.4rem solid #0071bc;\n  border-radius: 20px;\n  font-weight: 700 !important;\n  padding-left: 0rem !important;\n  margin-left: -0.1rem; }\n.left-nav-list {\n  border-left: 0.1rem solid #c2c2c2;\n  border-right: 0.1rem solid #c2c2c2;\n  border-bottom: 0.1rem solid #c2c2c2;\n  border-top: 0.1rem solid #c2c2c2;\n  border-radius: 20px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); }\n.left-nav-list li {\n    padding-left: 0.4rem;\n    border-top: none;\n    font-size: 2px; }\n.left-nav-list a {\n    line-height: 1.0;\n    outline: none;\n    word-break: break-word; }\n.left-nav-list a.usa-current {\n      color: #212121;\n      border-radius: 0.3rem; }\n.left-nav-sublist {\n  border: 0px;\n  line-height: 1;\n  border-top: none;\n  margin-left: 2rem !important; }\n.left-nav-sublist li {\n    font-size: 2px;\n    font-weight: 400; }\n.left-nav-sublist a {\n    line-height: 1.3;\n    outline: none; }\n.left-nav-current-submenu ::before {\n  content: \">\"; }\n.left-nav-current-submenu {\n  font-weight: 700 !important; }\n/**********Form Layout End************/\n/*********Detail Form****************/\n.detail-form-section {\n  padding: 0rem 1rem 1rem 1rem; }\n.detail-form-section label {\n    margin-bottom: -0.25rem; }\n.detail-form-section .usa-grid-full {\n    margin-bottom: 1rem; }\n.detail-form-section .span1 {\n    width: 10%; }\n.detail-form-section .span2 {\n    width: 20%; }\n.detail-form-section .span3 {\n    width: 30%; }\n.detail-form-section .span4 {\n    width: 40%; }\n.detail-form-section .span5 {\n    width: 50%; }\n.detail-form-section .span6 {\n    width: 60%; }\n.detail-form-section .span7 {\n    width: 70%; }\n.detail-form-section .span8 {\n    width: 80%; }\n.detail-form-section .span9 {\n    width: 90%; }\n.detail-form-section .span10 {\n    width: 100%; }\n.detail-form-section .button-act-actions {\n    float: none; }\n.detail-form-section .actions-dropdown {\n    margin-top: -1rem;\n    margin-left: 1rem; }\n.detail-form-section .actions-dropdown .actions-list {\n      width: 9rem; }\n.detail-form-section .alert-danger {\n    margin-top: 1rem; }\n.detail-form-section .inline-form {\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    border: 0.1rem solid #999;\n    padding: 1.5rem; }\n.detail-form-section .sort-utils div {\n    display: inline-block;\n    vertical-align: middle;\n    line-height: 3rem; }\n.detail-form-section .sort-utils .sortLabel {\n    margin: 0 1rem; }\n.detail-form-section .sort-utils .sortOptions {\n    margin: 0;\n    padding: 0; }\n.detail-form-section .sort-utils .sortOptions select {\n      width: auto;\n      padding-right: 3rem; }\n.detail-form-section .sort-utils .sortImage {\n    margin: 0;\n    padding: 0;\n    margin-left: -3px; }\n.detail-form-section .sort-utils .sortImage .image-sorting {\n      float: right;\n      border-top: 1px solid #737373;\n      border-right: 1px solid #737373;\n      border-bottom: 1px solid #737373;\n      border-top-right-radius: 2px;\n      border-bottom-right-radius: 2px;\n      height: 3rem;\n      padding: 6px;\n      margin-right: 0;\n      background-color: #fff; }\n.detail-form-section .sort-utils .sortPagination {\n    margin: 0 1rem;\n    padding: 0;\n    width: 20%; }\n.detail-form-section .sort-utils .sortPagination span:nth-of-type(3) {\n      padding-right: .5rem; }\n.detail-form-section .sort-utils .sortOther {\n    margin: 0 1rem;\n    padding: 0; }\n.detail-form-section .sort-utils .sortOther .comp-export {\n      width: 25px;\n      margin-top: 0; }\n.detail-form-section .sort-utils .sortOther .comp-export img {\n        height: 20px;\n        width: 25px; }\n/* timetracking */\n.tt-container {\n  padding: 0 2% 0 2%; }\n.tt-container .detail-container {\n    padding: 2% 0 2% 0 !important; }\n.tt-container .detail-container .left-menu-container {\n      margin-top: 0.1rem !important; }\n.tt-container .detail-container .center-content-withleftmenu {\n      margin-top: 0.1rem !important; }\n.tt-container .detail-container .button-act-actions {\n      float: none; }\n.tt-container .detail-container .button-act-edit {\n      float: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iaGFyZ2F2cmd1bnRha2EvYW5ndWxhci1yZWR1eC9zcmMvc3R5bGVzLnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFHQTtFQUNJLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFBQTtBQUl2QiwrRUFBQTtBQUNBO0VBQ0ksV0FBVztFQUNYLGNBQWE7RUFDYix1QkFBQTtFQUNBLGVBQWU7RUFDZixrQkFBaUIsRUFBQTtBQUVyQjtFQUNJLGdCQUFlLEVBQUE7QUFFbkI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQixFQUFBO0FBRXBCO0VBQ0ksa0JBQWlCO0VBQ2pCLFVBQVMsRUFBQTtBQUViO29JQ0hvSTtBREtwSTtFQUNJLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUyxFQUFBO0FBR2I7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWUsRUFBQTtBQUVuQjtFQUNJLGlCQUFpQixFQUFBO0FBR3JCO0VBQ0ksWUFBVztFQUNYLFNBQVE7RUFHUixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBO0FBUHZCO0lBU1EsT0FBTztJQUNQLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCLEVBQUE7QUFmMUI7SUFrQlEsT0FBTTtJQUNOLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtBQXBCMUI7SUF1QlEsY0FBQTtJQUNBLGlCQUFpQjtJQUNqQixrQkFBaUIsRUFBQTtBQXpCekI7TUEyQlksMEVBQUE7TUFDQSxnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLGNBQWM7TUFDZCxXQUFXLEVBQUE7QUEvQnZCO0lBb0NRLDhCQUE2QjtJQUM3QixrQkFBaUIsRUFBQTtBQUl6QjtFQUNJLGlDQUFnQztFQUNoQyxtQkF4RmU7RUF5RmYsMkJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1QixvQkFBbUIsRUFBQTtBQUd2QjtFQUNJLGlDQUFpQztFQUNqQyxrQ0FBa0M7RUFDbEMsbUNBQW1DO0VBQ25DLGdDQUFnQztFQUNoQyxtQkFuR2U7RUFvR2YseUNBQXFDLEVBQUE7QUFOekM7SUFRUSxvQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBdkdZLEVBQUE7QUE2RnBCO0lBYVEsZ0JBQWU7SUFDZixhQUFZO0lBQ1osc0JBQXNCLEVBQUE7QUFmOUI7TUFpQlksY0FBYTtNQUNiLHFCQUFvQixFQUFBO0FBTWhDO0VBQ0ksV0FBVTtFQUNWLGNBQWE7RUFDYixnQkFBZTtFQUNmLDRCQUEyQixFQUFBO0FBSi9CO0lBTVEsY0EzSFk7SUE0SFosZ0JBQWUsRUFBQTtBQVB2QjtJQVVRLGdCQUFnQjtJQUNoQixhQUFZLEVBQUE7QUFJcEI7RUFDSSxZQUFXLEVBQUE7QUFJZjtFQUNJLDJCQUEyQixFQUFBO0FBSS9CLHNDQUFBO0FBRUEscUNBQUE7QUFFQTtFQUNJLDRCQUEyQixFQUFBO0FBRC9CO0lBSVEsdUJBQXVCLEVBQUE7QUFKL0I7SUFPUSxtQkFBbUIsRUFBQTtBQVAzQjtJQVdRLFVBQXlCLEVBQUE7QUFYakM7SUFXUSxVQUF5QixFQUFBO0FBWGpDO0lBV1EsVUFBeUIsRUFBQTtBQVhqQztJQVdRLFVBQXlCLEVBQUE7QUFYakM7SUFXUSxVQUF5QixFQUFBO0FBWGpDO0lBV1EsVUFBeUIsRUFBQTtBQVhqQztJQVdRLFVBQXlCLEVBQUE7QUFYakM7SUFXUSxVQUF5QixFQUFBO0FBWGpDO0lBV1EsVUFBeUIsRUFBQTtBQVhqQztJQVdRLFdBQXlCLEVBQUE7QUFYakM7SUFpRFEsV0FBVSxFQUFBO0FBakRsQjtJQW9EUSxpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7QUFyRHpCO01Bd0RZLFdBQVcsRUFBQTtBQXhEdkI7SUE2RFEsZ0JBQWUsRUFBQTtBQTdEdkI7SUFnRVEsaUJBQWdCO0lBQ2hCLG9CQUFtQjtJQUNuQix5QkFBd0I7SUFDeEIsZUFBYyxFQUFBO0FBbkV0QjtJQXdFWSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGlCQUFpQixFQUFBO0FBMUU3QjtJQTZFWSxjQUFjLEVBQUE7QUE3RTFCO0lBZ0ZZLFNBQVM7SUFDVCxVQUFVLEVBQUE7QUFqRnRCO01BbUZnQixXQUFXO01BQ1gsbUJBQW1CLEVBQUE7QUFwRm5DO0lBd0ZZLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCLEVBQUE7QUExRjdCO01BNEZnQixZQUFZO01BQ1osNkJBQTZCO01BQzdCLCtCQUErQjtNQUMvQixnQ0FBZ0M7TUFFaEMsNEJBQTRCO01BQzVCLCtCQUErQjtNQUMvQixZQUFZO01BQ1osWUFBWTtNQUNaLGVBQWU7TUFDZixzQkFBcUIsRUFBQTtBQXRHckM7SUEwR1ksY0FBYztJQUNkLFVBQVU7SUFDVixVQUFTLEVBQUE7QUE1R3JCO01BOEdnQixvQkFBb0IsRUFBQTtBQTlHcEM7SUFrSFksY0FBYztJQUNkLFVBQVUsRUFBQTtBQW5IdEI7TUFxSGdCLFdBQVc7TUFDWCxhQUFZLEVBQUE7QUF0SDVCO1FBd0hvQixZQUFXO1FBQ1gsV0FBVyxFQUFBO0FBUS9CLGlCQUFBO0FBQ0E7RUFFSSxrQkFBaUIsRUFBQTtBQUZyQjtJQUtRLDZCQUE0QixFQUFBO0FBTHBDO01BUVksNkJBQTRCLEVBQUE7QUFSeEM7TUFXWSw2QkFBNEIsRUFBQTtBQVh4QztNQWNZLFdBQVUsRUFBQTtBQWR0QjtNQWlCWSxXQUFVLEVBQUEiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuJGJvcmRlci1yYWRpdXM6MjBweDtcbiRiYXNlLWZvbnQtc2l6ZTogMnB4O1xuLmFjdGl2aXR5LWRldGFpbHtcbiAgICBwYWRkaW5nLXRvcDoycmVtO1xuICAgIHBhZGRpbmctYm90dG9tOjJyZW07XG4gICAgXG59XG5cbi8qKioqKioqKioqRm9ybSBMYXlvdXQgKG1haW4gVGFiLCBMZWZ0IE1lbnUgJiBDZW50ZXIgQ29udGVudCkgU3RhcnQqKioqKioqKioqKiovXG4uZGV0YWlsLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBwYWRkaW5nLXRvcDowO1xuICAgIC8qIG1pbi1oZWlnaHQ6MTAwMHB4OyAqL1xuICAgIG92ZXJmbG93OiB1bnNldDtcbiAgICBtYXJnaW4tdG9wOjAuNXJlbTtcbn1cbi50ZW1wbGF0ZS1maWVsZHMtY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6M3JlbTtcbn1cbi5sZWZ0LW1lbnUtY29udGFpbmVye1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxNSU7XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbn1cbi5sZWZ0LW1lbnUtYWJzb2x1dGV7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgd2lkdGg6MTQlO1xufVxuLyogVGhpcyB3aWR0aCBpcyBjbG9zZWx5IGludGVycHJldHRlZCB0byB0aGUgMTUlIHdpZHRoIG9mIHRoZSBsZWZ0LW1lbnUtY29udGFpbmVyLiBcblNpbmNlIHRoZSBmaXhlZCBwb3NpdGlvbiB0YWtlcyB0aGUgcmVsYXRpdmUgd2lkdGggb2YgdGhlIGRvY3VtZW50IHdpbmRvdyBpdHNlbGYgdGhpcyBpcyBhcHByb3hpbWF0ZWQgdG8gdGhlIGRldGFpbCBjb250YWluZXIgd2lkdGggKi9cbi5sZWZ0LW1lbnUtZml4ZWQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTQlOyBcbiAgICB0b3A6IDNyZW07XG59XG5cbi5jZW50ZXItY29udGVudC13aXRobGVmdG1lbnV7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDgzJTtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG59XG4uY29tcC10b2dnbGUtaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLmFjdGlvbnMtY29udGFpbmVye1xuICAgIGhlaWdodDo0cmVtO1xuICAgIG1hcmdpbjowO1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgIGgzIHtcbiAgICAgICAgZmxleDogODtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbiAgICAuYWN0aW9ucy1zdGF0dXMge1xuICAgICAgICBmbGV4OjI7IFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgIH1cbiAgICAuYWN0aW9ucy1vcHRpb25zIHtcbiAgICAgICAgLyogZmxleDogMTsgICovXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgLmFjdGlvbnMtZHJvcGRvd24geyBcbiAgICAgICAgICAgIC8qIHBvc2l0aW9uIHByb3BlcnRpZXMgYW5kIHdpZHRoIGFzIHBlciBuZWVkZWQgZm9yIHRoZSBhY3Rpb25zIGNvbnRhaW5lciAqL1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHRvcDogMi41cmVtO1xuICAgICAgICAgICAgcmlnaHQ6IC0yLjhyZW07XG4gICAgICAgICAgICB3aWR0aDogN3JlbTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgLmJ1dHRvbi1hY3QtY2FuY2Vse1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Mi41cmVtIDIuNXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDowLjVyZW07XG4gICAgfVxufVxuXG4ubGVmdC1uYXYtY3VycmVudHtcbiAgICBib3JkZXItbGVmdDowLjRyZW0gc29saWQgIzAwNzFiYztcbiAgICBib3JkZXItcmFkaXVzOiRib3JkZXItcmFkaXVzO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6MHJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0Oi0wLjFyZW07XG59XG5cbi5sZWZ0LW5hdi1saXN0IHtcbiAgICBib3JkZXItbGVmdDogMC4xcmVtIHNvbGlkICNjMmMyYzI7XG4gICAgYm9yZGVyLXJpZ2h0OiAwLjFyZW0gc29saWQgI2MyYzJjMjtcbiAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgI2MyYzJjMjtcbiAgICBib3JkZXItdG9wOiAwLjFyZW0gc29saWQgI2MyYzJjMjtcbiAgICBib3JkZXItcmFkaXVzOiRib3JkZXItcmFkaXVzO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwuMik7XG4gICAgJiBsaXtcbiAgICAgICAgcGFkZGluZy1sZWZ0OjAuNHJlbTtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiRiYXNlLWZvbnQtc2l6ZTtcbiAgICB9XG4gICAgJiBhe1xuICAgICAgICBsaW5lLWhlaWdodDoxLjA7XG4gICAgICAgIG91dGxpbmU6bm9uZTtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgJi51c2EtY3VycmVudHtcbiAgICAgICAgICAgIGNvbG9yOiMyMTIxMjE7ICAgIFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czowLjNyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLmxlZnQtbmF2LXN1Ymxpc3R7XG4gICAgYm9yZGVyOjBweDtcbiAgICBsaW5lLWhlaWdodDoxO1xuICAgIGJvcmRlci10b3A6bm9uZTtcbiAgICBtYXJnaW4tbGVmdDoycmVtICFpbXBvcnRhbnQ7XG4gICAgJiBsaXtcbiAgICAgICAgZm9udC1zaXplOiRiYXNlLWZvbnQtc2l6ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgIH1cbiAgICAmIGF7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgIG91dGxpbmU6bm9uZTtcbiAgICB9XG59XG5cbi5sZWZ0LW5hdi1jdXJyZW50LXN1Ym1lbnUgOjpiZWZvcmV7XG4gICAgY29udGVudDpcIj5cIjtcbiAgICAvL3BhZGRpbmc6MC4ycmVtO1xufVxuXG4ubGVmdC1uYXYtY3VycmVudC1zdWJtZW51IHtcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59XG5cblxuLyoqKioqKioqKipGb3JtIExheW91dCBFbmQqKioqKioqKioqKiovXG5cbi8qKioqKioqKipEZXRhaWwgRm9ybSoqKioqKioqKioqKioqKiovXG5cbi5kZXRhaWwtZm9ybS1zZWN0aW9ue1xuICAgIHBhZGRpbmc6MHJlbSAxcmVtIDFyZW0gMXJlbTtcblxuICAgIGxhYmVse1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMC4yNXJlbTtcbiAgICAgfVxuICAgICYgLnVzYS1ncmlkLWZ1bGx7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgIC8vICAgbWFyZ2luLXRvcDogLTFyZW07XG4gICAgfVxuICAgIEBtaXhpbiBjYWxjdWxhdGVpbnB1dHNwYW4oJHdpZHRoX3Byb3Ape1xuICAgICAgICB3aWR0aCA6ICR3aWR0aF9wcm9wICogMTAlO1xuICAgIH1cblxuICAgICYgLnNwYW4xe1xuICAgICAgICBAaW5jbHVkZSBjYWxjdWxhdGVpbnB1dHNwYW4oMSk7XG4gICAgfVxuICAgICYgLnNwYW4ye1xuICAgICAgICBAaW5jbHVkZSBjYWxjdWxhdGVpbnB1dHNwYW4oMik7XG4gICAgfVxuICAgICYgLnNwYW4ze1xuICAgICAgICBAaW5jbHVkZSBjYWxjdWxhdGVpbnB1dHNwYW4oMyk7XG4gICAgfVxuICAgICYgLnNwYW40e1xuICAgICAgICBAaW5jbHVkZSBjYWxjdWxhdGVpbnB1dHNwYW4oNCk7XG4gICAgfVxuICAgICYgLnNwYW41e1xuICAgICAgICBAaW5jbHVkZSBjYWxjdWxhdGVpbnB1dHNwYW4oNSk7XG4gICAgfVxuICAgICYgLnNwYW42e1xuICAgICAgICBAaW5jbHVkZSBjYWxjdWxhdGVpbnB1dHNwYW4oNik7XG4gICAgfVxuICAgICYgLnNwYW43e1xuICAgICAgICBAaW5jbHVkZSBjYWxjdWxhdGVpbnB1dHNwYW4oNyk7XG4gICAgfVxuICAgICYgLnNwYW44e1xuICAgICAgICBAaW5jbHVkZSBjYWxjdWxhdGVpbnB1dHNwYW4oOCk7XG4gICAgfVxuICAgICYgLnNwYW45e1xuICAgICAgICBAaW5jbHVkZSBjYWxjdWxhdGVpbnB1dHNwYW4oOSk7XG4gICAgfVxuICAgICYgLnNwYW4xMHtcbiAgICAgICAgQGluY2x1ZGUgY2FsY3VsYXRlaW5wdXRzcGFuKDEwKTtcbiAgICB9XG5cbiAgICAmIC5mb3JtLXNlY3Rpb257XG4gICAgICAgIC8vIG1hcmdpbi10b3A6NHJlbTtcbiAgICB9XG4gICAgJiAuYnV0dG9uLWFjdC1hY3Rpb25ze1xuICAgICAgICBmbG9hdDpub25lO1xuICAgIH1cbiAgICAmIC5hY3Rpb25zLWRyb3Bkb3due1xuICAgICAgICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG5cbiAgICAgICAgJiAuYWN0aW9ucy1saXN0e1xuICAgICAgICAgICAgd2lkdGg6IDlyZW07XG4gICAgICAgIH1cblxuICAgIH1cbiAgICAuYWxlcnQtZGFuZ2Vye1xuICAgICAgICBtYXJnaW4tdG9wOjFyZW07XG4gICAgfVxuICAgIC5pbmxpbmUtZm9ybXtcbiAgICAgICAgcGFkZGluZy10b3A6MnJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206MnJlbTtcbiAgICAgICAgYm9yZGVyOjAuMXJlbSBzb2xpZCAjOTk5O1xuICAgICAgICBwYWRkaW5nOjEuNXJlbTtcbiAgICB9XG5cbiAgICAuc29ydC11dGlscyB7IC8vUGFnaW5hdGlvbiBhbmQgU29ydCBVdGlscyBmb3IgVGFibGVzXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnNvcnRMYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc29ydE9wdGlvbnMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICYgc2VsZWN0e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnNvcnRJbWFnZSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gICAgICAgICAgICAuaW1hZ2Utc29ydGluZ3tcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3MzczNzM7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzczNzM3MztcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzczNzM3MztcbiAgICAgICAgICAgICAgIC8vIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzczNzM3MztcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zb3J0UGFnaW5hdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB3aWR0aDoyMCU7XG4gICAgICAgICAgICBzcGFuOm50aC1vZi10eXBlKDMpIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc29ydE90aGVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIC5jb21wLWV4cG9ydCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDowO1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDoyMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuLyogdGltZXRyYWNraW5nICovXG4udHQtY29udGFpbmVye1xuXG4gICAgcGFkZGluZzowIDIlIDAgMiU7XG5cbiAgICAmIC5kZXRhaWwtY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nOjIlIDAgMiUgMCAhaW1wb3J0YW50O1xuXG4gICAgICAgICYgLmxlZnQtbWVudS1jb250YWluZXJ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOjAuMXJlbSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgICYgLmNlbnRlci1jb250ZW50LXdpdGhsZWZ0bWVudXtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MC4xcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgJiAuYnV0dG9uLWFjdC1hY3Rpb25ze1xuICAgICAgICAgICAgZmxvYXQ6bm9uZTtcbiAgICAgICAgfVxuICAgICAgICAmIC5idXR0b24tYWN0LWVkaXR7XG4gICAgICAgICAgICBmbG9hdDpub25lO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIFxuICAgIH1cbn1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi5hY3Rpdml0eS1kZXRhaWwge1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07IH1cblxuLyoqKioqKioqKipGb3JtIExheW91dCAobWFpbiBUYWIsIExlZnQgTWVudSAmIENlbnRlciBDb250ZW50KSBTdGFydCoqKioqKioqKioqKi9cbi5kZXRhaWwtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMiU7XG4gIHBhZGRpbmctdG9wOiAwO1xuICAvKiBtaW4taGVpZ2h0OjEwMDBweDsgKi9cbiAgb3ZlcmZsb3c6IHVuc2V0O1xuICBtYXJnaW4tdG9wOiAwLjVyZW07IH1cblxuLnRlbXBsYXRlLWZpZWxkcy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzcmVtOyB9XG5cbi5sZWZ0LW1lbnUtY29udGFpbmVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxNSU7XG4gIG1hcmdpbi10b3A6IDRyZW07IH1cblxuLmxlZnQtbWVudS1hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE0JTsgfVxuXG4vKiBUaGlzIHdpZHRoIGlzIGNsb3NlbHkgaW50ZXJwcmV0dGVkIHRvIHRoZSAxNSUgd2lkdGggb2YgdGhlIGxlZnQtbWVudS1jb250YWluZXIuIFxuU2luY2UgdGhlIGZpeGVkIHBvc2l0aW9uIHRha2VzIHRoZSByZWxhdGl2ZSB3aWR0aCBvZiB0aGUgZG9jdW1lbnQgd2luZG93IGl0c2VsZiB0aGlzIGlzIGFwcHJveGltYXRlZCB0byB0aGUgZGV0YWlsIGNvbnRhaW5lciB3aWR0aCAqL1xuLmxlZnQtbWVudS1maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDE0JTtcbiAgdG9wOiAzcmVtOyB9XG5cbi5jZW50ZXItY29udGVudC13aXRobGVmdG1lbnUge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDgzJTtcbiAgbWFyZ2luLWxlZnQ6IDIlOyB9XG5cbi5jb21wLXRvZ2dsZS1pbWcge1xuICBtYXJnaW4tbGVmdDogMXJlbTsgfVxuXG4uYWN0aW9ucy1jb250YWluZXIge1xuICBoZWlnaHQ6IDRyZW07XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXRvcDogMC41cmVtOyB9XG4gIC5hY3Rpb25zLWNvbnRhaW5lciBoMyB7XG4gICAgZmxleDogODtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtOyB9XG4gIC5hY3Rpb25zLWNvbnRhaW5lciAuYWN0aW9ucy1zdGF0dXMge1xuICAgIGZsZXg6IDI7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy10b3A6IC41cmVtOyB9XG4gIC5hY3Rpb25zLWNvbnRhaW5lciAuYWN0aW9ucy1vcHRpb25zIHtcbiAgICAvKiBmbGV4OiAxOyAgKi9cbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAuYWN0aW9ucy1jb250YWluZXIgLmFjdGlvbnMtb3B0aW9ucyAuYWN0aW9ucy1kcm9wZG93biB7XG4gICAgICAvKiBwb3NpdGlvbiBwcm9wZXJ0aWVzIGFuZCB3aWR0aCBhcyBwZXIgbmVlZGVkIGZvciB0aGUgYWN0aW9ucyBjb250YWluZXIgKi9cbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB0b3A6IDIuNXJlbTtcbiAgICAgIHJpZ2h0OiAtMi44cmVtO1xuICAgICAgd2lkdGg6IDdyZW07IH1cbiAgLmFjdGlvbnMtY29udGFpbmVyIC5idXR0b24tYWN0LWNhbmNlbCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyLjVyZW0gMi41cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgfVxuXG4ubGVmdC1uYXYtY3VycmVudCB7XG4gIGJvcmRlci1sZWZ0OiAwLjRyZW0gc29saWQgIzAwNzFiYztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDByZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IC0wLjFyZW07IH1cblxuLmxlZnQtbmF2LWxpc3Qge1xuICBib3JkZXItbGVmdDogMC4xcmVtIHNvbGlkICNjMmMyYzI7XG4gIGJvcmRlci1yaWdodDogMC4xcmVtIHNvbGlkICNjMmMyYzI7XG4gIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAjYzJjMmMyO1xuICBib3JkZXItdG9wOiAwLjFyZW0gc29saWQgI2MyYzJjMjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cbiAgLmxlZnQtbmF2LWxpc3QgbGkge1xuICAgIHBhZGRpbmctbGVmdDogMC40cmVtO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgZm9udC1zaXplOiAycHg7IH1cbiAgLmxlZnQtbmF2LWxpc3QgYSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuMDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IH1cbiAgICAubGVmdC1uYXYtbGlzdCBhLnVzYS1jdXJyZW50IHtcbiAgICAgIGNvbG9yOiAjMjEyMTIxO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC4zcmVtOyB9XG5cbi5sZWZ0LW5hdi1zdWJsaXN0IHtcbiAgYm9yZGVyOiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBib3JkZXItdG9wOiBub25lO1xuICBtYXJnaW4tbGVmdDogMnJlbSAhaW1wb3J0YW50OyB9XG4gIC5sZWZ0LW5hdi1zdWJsaXN0IGxpIHtcbiAgICBmb250LXNpemU6IDJweDtcbiAgICBmb250LXdlaWdodDogNDAwOyB9XG4gIC5sZWZ0LW5hdi1zdWJsaXN0IGEge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgb3V0bGluZTogbm9uZTsgfVxuXG4ubGVmdC1uYXYtY3VycmVudC1zdWJtZW51IDo6YmVmb3JlIHtcbiAgY29udGVudDogXCI+XCI7IH1cblxuLmxlZnQtbmF2LWN1cnJlbnQtc3VibWVudSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDsgfVxuXG4vKioqKioqKioqKkZvcm0gTGF5b3V0IEVuZCoqKioqKioqKioqKi9cbi8qKioqKioqKipEZXRhaWwgRm9ybSoqKioqKioqKioqKioqKiovXG4uZGV0YWlsLWZvcm0tc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDByZW0gMXJlbSAxcmVtIDFyZW07IH1cbiAgLmRldGFpbC1mb3JtLXNlY3Rpb24gbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjI1cmVtOyB9XG4gIC5kZXRhaWwtZm9ybS1zZWN0aW9uIC51c2EtZ3JpZC1mdWxsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XG4gIC5kZXRhaWwtZm9ybS1zZWN0aW9uIC5zcGFuMSB7XG4gICAgd2lkdGg6IDEwJTsgfVxuICAuZGV0YWlsLWZvcm0tc2VjdGlvbiAuc3BhbjIge1xuICAgIHdpZHRoOiAyMCU7IH1cbiAgLmRldGFpbC1mb3JtLXNlY3Rpb24gLnNwYW4zIHtcbiAgICB3aWR0aDogMzAlOyB9XG4gIC5kZXRhaWwtZm9ybS1zZWN0aW9uIC5zcGFuNCB7XG4gICAgd2lkdGg6IDQwJTsgfVxuICAuZGV0YWlsLWZvcm0tc2VjdGlvbiAuc3BhbjUge1xuICAgIHdpZHRoOiA1MCU7IH1cbiAgLmRldGFpbC1mb3JtLXNlY3Rpb24gLnNwYW42IHtcbiAgICB3aWR0aDogNjAlOyB9XG4gIC5kZXRhaWwtZm9ybS1zZWN0aW9uIC5zcGFuNyB7XG4gICAgd2lkdGg6IDcwJTsgfVxuICAuZGV0YWlsLWZvcm0tc2VjdGlvbiAuc3Bhbjgge1xuICAgIHdpZHRoOiA4MCU7IH1cbiAgLmRldGFpbC1mb3JtLXNlY3Rpb24gLnNwYW45IHtcbiAgICB3aWR0aDogOTAlOyB9XG4gIC5kZXRhaWwtZm9ybS1zZWN0aW9uIC5zcGFuMTAge1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gIC5kZXRhaWwtZm9ybS1zZWN0aW9uIC5idXR0b24tYWN0LWFjdGlvbnMge1xuICAgIGZsb2F0OiBub25lOyB9XG4gIC5kZXRhaWwtZm9ybS1zZWN0aW9uIC5hY3Rpb25zLWRyb3Bkb3duIHtcbiAgICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTsgfVxuICAgIC5kZXRhaWwtZm9ybS1zZWN0aW9uIC5hY3Rpb25zLWRyb3Bkb3duIC5hY3Rpb25zLWxpc3Qge1xuICAgICAgd2lkdGg6IDlyZW07IH1cbiAgLmRldGFpbC1mb3JtLXNlY3Rpb24gLmFsZXJ0LWRhbmdlciB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTsgfVxuICAuZGV0YWlsLWZvcm0tc2VjdGlvbiAuaW5saW5lLWZvcm0ge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICM5OTk7XG4gICAgcGFkZGluZzogMS41cmVtOyB9XG4gIC5kZXRhaWwtZm9ybS1zZWN0aW9uIC5zb3J0LXV0aWxzIGRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07IH1cbiAgLmRldGFpbC1mb3JtLXNlY3Rpb24gLnNvcnQtdXRpbHMgLnNvcnRMYWJlbCB7XG4gICAgbWFyZ2luOiAwIDFyZW07IH1cbiAgLmRldGFpbC1mb3JtLXNlY3Rpb24gLnNvcnQtdXRpbHMgLnNvcnRPcHRpb25zIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDsgfVxuICAgIC5kZXRhaWwtZm9ybS1zZWN0aW9uIC5zb3J0LXV0aWxzIC5zb3J0T3B0aW9ucyBzZWxlY3Qge1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtOyB9XG4gIC5kZXRhaWwtZm9ybS1zZWN0aW9uIC5zb3J0LXV0aWxzIC5zb3J0SW1hZ2Uge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAtM3B4OyB9XG4gICAgLmRldGFpbC1mb3JtLXNlY3Rpb24gLnNvcnQtdXRpbHMgLnNvcnRJbWFnZSAuaW1hZ2Utc29ydGluZyB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzczNzM3MztcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3MzczNzM7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzczNzM3MztcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xuICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuICAuZGV0YWlsLWZvcm0tc2VjdGlvbiAuc29ydC11dGlscyAuc29ydFBhZ2luYXRpb24ge1xuICAgIG1hcmdpbjogMCAxcmVtO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDIwJTsgfVxuICAgIC5kZXRhaWwtZm9ybS1zZWN0aW9uIC5zb3J0LXV0aWxzIC5zb3J0UGFnaW5hdGlvbiBzcGFuOm50aC1vZi10eXBlKDMpIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtOyB9XG4gIC5kZXRhaWwtZm9ybS1zZWN0aW9uIC5zb3J0LXV0aWxzIC5zb3J0T3RoZXIge1xuICAgIG1hcmdpbjogMCAxcmVtO1xuICAgIHBhZGRpbmc6IDA7IH1cbiAgICAuZGV0YWlsLWZvcm0tc2VjdGlvbiAuc29ydC11dGlscyAuc29ydE90aGVyIC5jb21wLWV4cG9ydCB7XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIG1hcmdpbi10b3A6IDA7IH1cbiAgICAgIC5kZXRhaWwtZm9ybS1zZWN0aW9uIC5zb3J0LXV0aWxzIC5zb3J0T3RoZXIgLmNvbXAtZXhwb3J0IGltZyB7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgd2lkdGg6IDI1cHg7IH1cblxuLyogdGltZXRyYWNraW5nICovXG4udHQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAyJSAwIDIlOyB9XG4gIC50dC1jb250YWluZXIgLmRldGFpbC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDIlIDAgMiUgMCAhaW1wb3J0YW50OyB9XG4gICAgLnR0LWNvbnRhaW5lciAuZGV0YWlsLWNvbnRhaW5lciAubGVmdC1tZW51LWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tdG9wOiAwLjFyZW0gIWltcG9ydGFudDsgfVxuICAgIC50dC1jb250YWluZXIgLmRldGFpbC1jb250YWluZXIgLmNlbnRlci1jb250ZW50LXdpdGhsZWZ0bWVudSB7XG4gICAgICBtYXJnaW4tdG9wOiAwLjFyZW0gIWltcG9ydGFudDsgfVxuICAgIC50dC1jb250YWluZXIgLmRldGFpbC1jb250YWluZXIgLmJ1dHRvbi1hY3QtYWN0aW9ucyB7XG4gICAgICBmbG9hdDogbm9uZTsgfVxuICAgIC50dC1jb250YWluZXIgLmRldGFpbC1jb250YWluZXIgLmJ1dHRvbi1hY3QtZWRpdCB7XG4gICAgICBmbG9hdDogbm9uZTsgfVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bhargavrguntaka/angular-redux/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map