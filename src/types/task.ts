export interface ChildTask {
  businessId: string;
  businessName: string;
  communityId: string;
  windowId: string;
}
export interface DIOTakeNoSave {
  applyUserName: string;
  businessId: string;
  communityId: string;
  identityCardNum: string;
  takeType: string;
  phoneNumber: string;
  windowId: string;
}
export interface DROTakeNo {
  applyUserName: string;
  businessName: string;
  communityName: string;
  getNoTime: string;
  id: string;
  identityCardNum: string;
  phoneNumber: string;
  takeType: string;
  windowNo: string;
}
export interface Task {
  id: string;
  kindName: string;
  businessList: ChildTask[];
}
