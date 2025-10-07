
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ActindoCollector extends SketchCollector {

    static CONFIG = {
        id: "actindo",
        name: "Actindo",
        description: "i18n.collectors.actindo.description",
        version: "0",
        website: "https://www.actindo.biz/actindo/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/552.jpg",
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
        entryUrl: "https://www.actindo.biz/actindo/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ActindoCollector.CONFIG);
    }
}
