
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LogoixCollector extends SketchCollector {

    static CONFIG = {
        id: "logoix",
        name: "LogoiX",
        description: "i18n.collectors.logoix.description",
        version: "0",
        website: "https://www.logoix.com/cgi-bin/index.pl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/134672.jpg",
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
        entryUrl: "https://www.logoix.com/cgi-bin/index.pl",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LogoixCollector.CONFIG);
    }
}
