
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ZentrallaborCollector extends SketchCollector {

    static CONFIG = {
        id: "zentrallabor",
        name: "Zentrallabor",
        description: "i18n.collectors.zentrallabor.description",
        version: "0",
        website: "https://zlportal.zlgmbh.com/zl/frontend/index.php?section=postfach",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1862722.jpg",
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
        entryUrl: "https://zlportal.zlgmbh.com/zl/frontend/index.php?section=postfach",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZentrallaborCollector.CONFIG);
    }
}
