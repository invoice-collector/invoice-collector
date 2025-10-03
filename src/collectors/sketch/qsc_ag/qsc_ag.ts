
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class QscAgCollector extends SketchCollector {

    static CONFIG = {
        id: "qsc_ag",
        name: "QSC AG",
        description: "i18n.collectors.qsc_ag.description",
        version: "0",
        website: "https://www.myplusnet.de/login_form.php?st=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31484.jpg",
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
        entryUrl: "https://www.myplusnet.de/login_form.php?st=1",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(QscAgCollector.CONFIG);
    }
}
