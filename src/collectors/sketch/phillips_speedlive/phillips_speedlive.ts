
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PhillipsSpeedliveCollector extends SketchCollector {

    static CONFIG = {
        id: "phillips_speedlive",
        name: "Phillips Speedlive",
        description: "i18n.collectors.phillips_speedlive.description",
        version: "0",
        website: "https://www.speechexec.com/ger/rechnungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/148952.jpg",
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
        entryUrl: "https://www.speechexec.com/ger/rechnungen/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PhillipsSpeedliveCollector.CONFIG);
    }
}
