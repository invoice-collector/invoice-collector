
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DisneyplusCollector extends SketchCollector {

    static CONFIG = {
        id: "disneyplus",
        name: "Disneyplus",
        description: "i18n.collectors.disneyplus.description",
        version: "0",
        website: "https://www.disneyplus.com/de-de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777346.jpg",
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
        entryUrl: "https://www.disneyplus.com/de-de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DisneyplusCollector.CONFIG);
    }
}
