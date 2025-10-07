
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AkkuTeileCollector extends SketchCollector {

    static CONFIG = {
        id: "akku_teile",
        name: "AKKU TEILE",
        description: "i18n.collectors.akku_teile.description",
        version: "0",
        website: "https://www.akkuteile-b2b.de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/800924.jpg",
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
        entryUrl: "https://www.akkuteile-b2b.de/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AkkuTeileCollector.CONFIG);
    }
}
