
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShpockFinderlyGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "shpock_finderly_gmbh",
        name: "Shpock (Finderly GmbH)",
        description: "i18n.collectors.shpock_finderly_gmbh.description",
        version: "0",
        website: "https://plus.shpock.com/en-gb/manager/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/530565.jpg",
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
        entryUrl: "https://plus.shpock.com/en-gb/manager/account/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShpockFinderlyGmbhCollector.CONFIG);
    }
}
