
import { CaseCenterService } from "../../service/caseCenter.service";

import { HttpClient } from '@angular/common/http';
import { DetailCellRenderer } from '../../detail-cell-renderer.component';
import { ButtonRendererComponent } from '../../renderer/button-cell-renderer.component';
import { Component, OnInit,ViewChild } from "@angular/core";
import 'ag-grid-enterprise';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClarityModule } from '@clr/angular';
import { CaseDetail } from 'src/app/caseDetail';
import { DefectInfo } from 'src/app/DefectInfo';

import { EditDefectModalComponent } from '../edit-defect-modal/edit-defect-modal.component';
@Component({
  selector: 'app-caseCenter',
  templateUrl: './caseCenter.html',
  styleUrls: ['./caseCenter.component.css']
})

export class CaseCenterComponent implements OnInit {
  
   @ViewChild(EditDefectModalComponent) public modal: EditDefectModalComponent;
  
  public caseSummaryOpen=true;
  public caseDetailOpen=true;
   editDefect:DefectInfo = {maskId:"TMIG",ebNumber:"EB",defectId:2,defectNo:"001",locX:"121",locY:"212",defectCd:"1C",
   defectSize:"70",defectElement:"Sn",prpDefect:"N"};
  

  ngAfterViewInit(): void {
      this.modal.onOK.subscribe(editDefect => {
          this.editDefect = editDefect;
          this.modal.close();
      });
  }


  constructor(private caseCenterService: CaseCenterService,
    private http:HttpClient){
      this.detailCellRenderer = 'myDetailCellRenderer';
      this.frameworkComponents = { myDetailCellRenderer: DetailCellRenderer, 
        btnCellRenderer: ButtonRendererComponent };
    }
  
  public caseEditData:DefectInfo;

  private detailCellRenderer;
  private frameworkComponents;
  public editModalOpen=true;
  public error=false;
  public chartOption: any = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1430, 1550, 1200, 1650.1450, 1680.1890],
      type: 'line',
      areaStyle: {}
    }]
  };
  ngOnInit(): void {
   
    this.caseCenterService.getCaseCenterSummaries().subscribe(
      dataList => {
          this.caseCenterRowData = dataList
      },
      error => {
          console.log(error);
      }
  )
    
  };
  private  rowSelection;
  private caseSummaryGridApi;
  private caseSummaryColumnApi;
  private caseGridApi;
  private caseGridColumnApi;
  
   /**
   * Close the modal and reset error states
   */
   public cancel(): void {
     
  }
  
    public removeCategory(): void {
      
    }
  
    /**
     * Save the currently edited category
     */
    public save(): void {
     
    }
  

  addItem(newItem) {
    // if (newItem != "") {
    //     this.list.addItem(newItem);
    // }
  }
  //AG-Grid Case Summary Row Selection
  onSelectionChanged(params) {
   
    var selectedRows = this.caseSummaryGridApi.getSelectedRows();
    // document.querySelector('#selectedRows').innerHTML =
    //   selectedRows.length === 1 ? selectedRows[0].athlete : '';

    console.log(selectedRows[0]);  
  }
  onCaseSelectionChanged(params) {
   
    var selectedRows = this.caseGridApi.getSelectedRows();
    // document.querySelector('#selectedRows').innerHTML =
    //   selectedRows.length === 1 ? selectedRows[0].athlete : '';

    console.log(selectedRows[0]);  
  }
  qryCaseSummaries(){
    

      
    return this.caseCenterService.getCaseCenterSummaries();

  }
  caseCenterRowModelType="serverSide";
  defaultColDef = {
    editable: false,
    sortable: true,
    flex: 1,
    minWidth: 120,
    filter: true,
    resizable: true,
  };
  
  caseSummaryColumnDefs = [
    { field: 'procStatus',headerName:'Status' ,sortable: false,width:'130px',cellClass:'ag-header-cell-content'},
    { field: 'criticalDftCnt',headerName:'1C' ,sortable: true,width:'130px',cellClass:'ag-header-cell-content'},
    { field: 'onoDftCnt' ,headerName:'OnO' ,sortable: true,width:'130px',cellClass:'ag-header-cell-content'},
    //{ field: 'pellicleDftCnt',headerName:'Pellicle',sortable: true ,width:'120px',cellClass:'ag-header-cell-content'},
    { field: 'wiaRequalCnt',headerName:'WIA Requal',sortable: true ,width:'130px',cellClass:'ag-header-cell-content'},
    { field: 'wiaNtoCnt',headerName:'WIA NTO',sortable: true ,width:'130px',cellClass:'ag-header-cell-content'},
    { field: 'wiaRrCnt',headerName:'WIA RR',sortable: true ,width:'130px',cellClass:'ag-header-cell-content'},
    //{ field: 'rbiCenterCnt',headerName:'RBI Center',sortable: true ,width:'120px',cellClass:'ag-header-cell-content'},
    //{ field: 'rbiEdgeCnt',headerName:'RBI Edge',sortable: true ,width:'120px',cellClass:'ag-header-cell-content'},
    //{ field: 'rbiBx100Cnt',headerName:'BX100',sortable: true ,width:'120px',cellClass:'ag-header-cell-content'},
    //{ field: 'maskOutOfCnt',headerName:'Mask Risk',sortable: true ,width:'120px',cellClass:'ag-header-cell-content'},
    //{ field: 'pellicleRuptureCnt',headerName:'Pellicle Rupture',sortable: true ,width:'140px',cellClass:'ag-header-cell-content'},
  ];
  caseCenterRowData = [
    { procStatus: 'New', criticalDftCnt: '1',onoDftCnt:'2', pellicleDftCnt:'0',rbiDftCnt:'2',wiaCnt:'4',price: 35000 },
    { procStatus: 'Processing', criticalDftCnt: '1',onoDftCnt:'2', pellicleDftCnt:'0',rbiDftCnt:'2',wiaCnt:'4', price: 32000 },
    { procStatus: 'Closed', criticalDftCnt: '1',onoDftCnt:'2', pellicleDftCnt:'0',rbiDftCnt:'2',wiaCnt:'4', price: 72000 },
  ]; 
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ]; 
  
  caseColDefs=[
    { field: 'procStatus',headerName:'Status' ,width:'100px',cellClass:'ag-header-cell-content'},
    { field: 'caseId',headerName:'Insp. Dt' ,width:'150px' },
    { field: 'maskId',headerName:'Mask Id' ,width:'140px'  },
    
  ];
  caseRowData=[
    {caseId: '2021/02/01 12:40:11', maskId: 'TMLV31-780A-3', procStatus:'New',price: 35000 ,
     caseProcess:[
      {name:'ADC',status:"",startDt:"3/4 12:00"},
      {name:'MDC',status:"",startDt:"3/4 12:00"},
      {name:'WIA',status:"",startDt:"3/4 12:00"},
      {name:'Potential Lot',status:"",startDt:"3/4 12:00"},
      {name:'Element Prediction',status:"",startDt:"3/4 12:00"},
      {name:'Closed',status:"",startDt:"3/4 14:00"}
     ]},
    { caseId: '2021/02/01 05:50:55', maskId: 'TMLR66-985A-2',procStatus:'New', price: 35000 },
    { caseId: '2021/02/01 11:43:27', maskId: 'TMLR32-280B-6',procStatus:'Processing', price: 35000 },
    { caseId: '2021/02/01 22:18:39', maskId: 'TMIG18-385A-3',procStatus:'Processing', price: 35000 },
    { caseId: '2021/01/31 18:57:59', maskId: 'TNNV21-409B-1',procStatus:'Closed', price: 35000 },
    { caseId: '2021/02/01 10:51:32', maskId: 'TMKG88-99BA-4',procStatus:'Closed', price: 35000 }
    
  ];
  defectColDefs=[
    { field: 'defectId',headerName:'Defect Id' ,sortable: false,cellRenderer: 'agGroupCellRenderer',cellClass:'ag-header-cell-content'},
    { field: 'defectCd',headerName:'Defect Code' ,sortable: true,cellClass:'ag-header-cell-content'},
    { field: 'maskLoc',headerName:'Mask(X,Y)' ,sortable: false,cellClass:'ag-header-cell-content'},
    { field: 'waferLoc',headerName:'Wafer(X,Y)' ,sortable: false,cellClass:'ag-header-cell-content'},
    { field: 'gdsLoc',headerName:'GDS(X,Y)' ,sortable: false,cellClass:'ag-header-cell-content'},
    { field: 'defectSize',headerName:'Size(um)' ,sortable: false,cellClass:'ag-header-cell-content'},
    { field: 'defectElement',headerName:'Element' ,sortable: false,cellClass:'ag-header-cell-content'},
    { field: 'prpDefect',headerName:'PRP Defect' ,sortable: false,cellClass:'ag-header-cell-content'},
    { field: 'action',headerName:'Action' ,sortable: false,
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: 'Click 1'
      }
    }
  ];
  onBtnClick1(e) {
    console.log(e.rowData);
  };
  defectRowData=[
    { defectId: '1', defectCd: '1C', maskLoc: "(2812,6221)" ,waferLoc: "(977,811)",gdsLoc: "(433,631)",defectSize: "60",defectElement: "Sn",prpDefect:"Y" },
    { defectId: '2', defectCd: '2C', maskLoc: "(8129,11901)" ,waferLoc: "(312,432)",gdsLoc: "(112,595)",defectSize: "110",defectElement: "Sn",prpDefect:"Y" },
    { defectId: '3', defectCd: '2C', maskLoc: "(4121,3209)" ,waferLoc: "(3212,712)",gdsLoc: "(2691,318)",defectSize: "30",defectElement: "",prpDefect:"N" }
  ];  

  
  showComplete: boolean = false;
  onFirstDataRendered(params) {
    params.api.forEachNode(function (node) {
      node.setExpanded(false);
    });
  }
  onCaseCennterGridReady(params) {
    this.caseSummaryGridApi = params.api;
    this.caseSummaryColumnApi = params.columnApi;
  }
  onCaseGridReady(params) {
    this.caseGridApi = params.api;
    this.caseGridColumnApi = params.columnApi;
  }
  public selectedCaseObj:CaseDetail

  onCaseMaskSelected(caseObj:CaseDetail):void{
    this.selectedCaseObj=caseObj;
  }
  
}
