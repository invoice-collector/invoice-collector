
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CityNetworkCollector extends SketchCollector {

    static CONFIG = {
        id: "city_network",
        name: "City Network",
        description: "i18n.collectors.city_network.description",
        version: "0",
        website: "http://www.citynetwork.se",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9061.jpg",
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
        entryUrl: "http://www.citynetwork.se",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CityNetworkCollector.CONFIG);
    }
}
