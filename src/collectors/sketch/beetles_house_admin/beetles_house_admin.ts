
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BeetlesHouseAdminCollector extends SketchCollector {

    static CONFIG = {
        id: "beetles_house_admin",
        name: "Beetles House Admin",
        description: "i18n.collectors.beetles_house_admin.description",
        version: "0",
        website: "https://beetleshouse.com/w8wlae0ugdwihmvt/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1617133.jpg",
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
        entryUrl: "https://beetleshouse.com/w8wlae0ugdwihmvt/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BeetlesHouseAdminCollector.CONFIG);
    }
}
