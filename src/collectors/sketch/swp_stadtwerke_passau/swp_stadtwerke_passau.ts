
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SwpStadtwerkePassauCollector extends SketchCollector {

    static CONFIG = {
        id: "swp_stadtwerke_passau",
        name: "SWP Stadtwerke Passau",
        description: "i18n.collectors.swp_stadtwerke_passau.description",
        version: "0",
        website: "https://portal.tpponline.de/py/portal/default/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1919980.jpg",
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
        entryUrl: "https://portal.tpponline.de/py/portal/default/index",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SwpStadtwerkePassauCollector.CONFIG);
    }
}
