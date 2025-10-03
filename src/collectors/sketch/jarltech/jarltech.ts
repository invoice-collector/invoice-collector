
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JarltechCollector extends SketchCollector {

    static CONFIG = {
        id: "jarltech",
        name: "Jarltech",
        description: "i18n.collectors.jarltech.description",
        version: "0",
        website: "https://www.jarltech.com/2007/index.php?language=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9309.jpg",
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
        entryUrl: "https://www.jarltech.com/2007/index.php?language=de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JarltechCollector.CONFIG);
    }
}
