import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OxstalCollector extends SketchCollector {

    static CONFIG = {
        id: "oxstal",
        name: "Oxstal",
        description: "i18n.collectors.oxstal.description",
        version: "0",
        website: "https://www.oxstal.com",
        logo: "https://www.oxstal.com/img/logo-1684837253-111-302x.jpg",
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
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OxstalCollector.CONFIG);
    }
}
