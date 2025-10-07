
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfHighPointUtilitiesCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_high_point_utilities",
        name: "City of High Point Utilities",
        description: "i18n.collectors.city_of_high_point_utilities.description",
        version: "0",
        website: "https://ipn2.paymentus.com/cp/view-bill-history.action?accountId=26433035&accthid=Haz2JlD41WY1AVc_AoAI7a9nmgk&liabilityId=0&liabilityHid=JVihZwQSTrup151_nAV5sAGDHzA&CSRF_TOKEN=1603725584630-e3c920db54120e9d096a271b8819a892",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/738700.jpg",
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
        entryUrl: "https://ipn2.paymentus.com/cp/view-bill-history.action?accountId=26433035&accthid=Haz2JlD41WY1AVc_AoAI7a9nmgk&liabilityId=0&liabilityHid=JVihZwQSTrup151_nAV5sAGDHzA&CSRF_TOKEN=1603725584630-e3c920db54120e9d096a271b8819a892",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CityOfHighPointUtilitiesCollector.CONFIG);
    }
}
