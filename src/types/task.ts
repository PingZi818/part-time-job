export interface ChildTask {
  businessId: string;
  businessName: string;
  communityId: string;
  windowId: string;
}
export interface Task {
  id: string;
  kindName: string;
  businessList: ChildTask[];
}
