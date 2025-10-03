
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AnkorstoreCollector extends SketchCollector {

    static CONFIG = {
        id: "ankorstore",
        name: "Ankorstore",
        description: "i18n.collectors.ankorstore.description",
        version: "0",
        website: "https://www.ankorstore.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/711790.jpg",
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
        entryUrl: "https://www.ankorstore.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AnkorstoreCollector.CONFIG);
    }
}
