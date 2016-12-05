/**
 * 
 */

import BaseBusiness = require("./../BaseBusiness");
import IExampleModel = require("./../../model/interfaces/ExampleModel");

interface ExampleBusiness extends BaseBusiness<IExampleModel> {

}
export = ExampleBusiness;