
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KelagCollector extends SketchCollector {

    static CONFIG = {
        id: "kelag",
        name: "kelag",
        description: "i18n.collectors.kelag.description",
        version: "0",
        website: "https://services.kelag.at/ISS/Login.aspx?service=start",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1363242.jpg",
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
        entryUrl: "https://services.kelag.at/ISS/Login.aspx?service=start",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KelagCollector.CONFIG);
    }
}
