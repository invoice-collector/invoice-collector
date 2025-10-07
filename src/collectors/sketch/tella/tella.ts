
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TellaCollector extends SketchCollector {

    static CONFIG = {
        id: "tella",
        name: "Tella",
        description: "i18n.collectors.tella.description",
        version: "0",
        website: "https://www.tella.tv/api/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3197532.jpg",
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
        entryUrl: "https://www.tella.tv/api/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TellaCollector.CONFIG);
    }
}
