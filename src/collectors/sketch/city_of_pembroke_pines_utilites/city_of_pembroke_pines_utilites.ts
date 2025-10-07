
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfPembrokePinesUtilitesCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_pembroke_pines_utilites",
        name: "City of Pembroke Pines Utilites",
        description: "i18n.collectors.city_of_pembroke_pines_utilites.description",
        version: "0",
        website: "https://pembrokepinesflcitizens.munisselfservice.com/citizens/UtilityBilling/AccountBrowse.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2724315.jpg",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://pembrokepinesflcitizens.munisselfservice.com/citizens/UtilityBilling/AccountBrowse.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CityOfPembrokePinesUtilitesCollector.CONFIG);
    }
}
