
import { SketchCollector } from '../../sketchCollector';

export class CityOfTorranceUtilitiesCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_torrance_utilities",
        name: "City Of Torrance Utilities",
        description: "i18n.collectors.city_of_torrance_utilities.description",
        version: "0",
        website: "https://torranceca.myutilitydirect.com/customerportal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4176442.jpg",
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
        entryUrl: "https://torranceca.myutilitydirect.com/customerportal/",
    }

    constructor() {
        super(CityOfTorranceUtilitiesCollector.CONFIG);
    }
}
