
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MygercopCollector extends SketchCollector {

    static CONFIG = {
        id: "mygercop",
        name: "Mygercop",
        description: "i18n.collectors.mygercop.description",
        version: "0",
        website: "https://etudeamboise.mygercop.com/xnet/locataire/mes-documents/classeur/1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3103869.jpg",
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
        entryUrl: "https://etudeamboise.mygercop.com/xnet/locataire/mes-documents/classeur/1",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MygercopCollector.CONFIG);
    }
}
