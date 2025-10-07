
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BigCartelCollector extends SketchCollector {

    static CONFIG = {
        id: "big_cartel",
        name: "Big Cartel",
        description: "i18n.collectors.big_cartel.description",
        version: "0",
        website: "https://my.bigcartel.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30035.jpg",
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
        entryUrl: "https://my.bigcartel.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BigCartelCollector.CONFIG);
    }
}
