import {AttachFacility} from "./attach-facility";
import {Contract} from "./contract";

export interface ContractDetail {
  id?: number,
  quantity: number
  attachFacility: AttachFacility
  contract: Contract
}
