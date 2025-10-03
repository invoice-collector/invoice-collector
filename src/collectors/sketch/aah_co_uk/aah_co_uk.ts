
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AahCoUkCollector extends SketchCollector {

    static CONFIG = {
        id: "aah_co_uk",
        name: "Aah(.co.uk)",
        description: "i18n.collectors.aah_co_uk.description",
        version: "0",
        website: "https://www.aah.co.uk/webapp/wcs/stores/servlet/LoginAccessWebsitesView?catalogId=10053&langId=44&storeId=20053",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20247.jpg",
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
        entryUrl: "https://www.aah.co.uk/webapp/wcs/stores/servlet/LoginAccessWebsitesView?catalogId=10053&langId=44&storeId=20053",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AahCoUkCollector.CONFIG);
    }
}
