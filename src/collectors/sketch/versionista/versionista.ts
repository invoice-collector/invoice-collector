
import { SketchCollector } from '../../sketchCollector';

export class VersionistaCollector extends SketchCollector {

    static CONFIG = {
        id: "versionista",
        name: "Versionista",
        description: "i18n.collectors.versionista.description",
        version: "0",
        website: "https://versionista.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/55539.jpg",
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
        entryUrl: "https://versionista.com/login",
    }

    constructor() {
        super(VersionistaCollector.CONFIG);
    }
}
