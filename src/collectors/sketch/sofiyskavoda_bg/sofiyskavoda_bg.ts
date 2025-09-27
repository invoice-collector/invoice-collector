
import { SketchCollector } from '../../sketchCollector';

export class SofiyskavodaBgCollector extends SketchCollector {

    static CONFIG = {
        id: "sofiyskavoda_bg",
        name: "Sofiyskavoda.bg",
        description: "i18n.collectors.sofiyskavoda_bg.description",
        version: "0",
        website: "https://sofiyskavoda.bg/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1252950.jpg",
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
        entryUrl: "https://sofiyskavoda.bg/login",
    }

    constructor() {
        super(SofiyskavodaBgCollector.CONFIG);
    }
}
