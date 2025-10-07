
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FotoErhardtCollector extends SketchCollector {

    static CONFIG = {
        id: "foto_erhardt",
        name: "Foto Erhardt",
        description: "i18n.collectors.foto_erhardt.description",
        version: "0",
        website: "https://www.foto-erhardt.de/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/86516.jpg",
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
        entryUrl: "https://www.foto-erhardt.de/login.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FotoErhardtCollector.CONFIG);
    }
}
