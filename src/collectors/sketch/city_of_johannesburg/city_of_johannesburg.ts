
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfJohannesburgCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_johannesburg",
        name: "City of Johannesburg",
        description: "i18n.collectors.city_of_johannesburg.description",
        version: "0",
        website: "https://eservices.joburg.org.za/Pages/eStatements.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/391640.jpg",
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
        entryUrl: "https://eservices.joburg.org.za/Pages/eStatements.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CityOfJohannesburgCollector.CONFIG);
    }
}
