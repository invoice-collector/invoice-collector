
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfRanchoCucamongaCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_rancho_cucamonga",
        name: "City of Rancho Cucamonga",
        description: "i18n.collectors.city_of_rancho_cucamonga.description",
        version: "0",
        website: "https://rcmu.cityofrc.us/my-account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2724314.jpg",
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
        entryUrl: "https://rcmu.cityofrc.us/my-account/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CityOfRanchoCucamongaCollector.CONFIG);
    }
}
