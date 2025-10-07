
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MitreLinenCollector extends SketchCollector {

    static CONFIG = {
        id: "mitre_linen",
        name: "Mitre Linen",
        description: "i18n.collectors.mitre_linen.description",
        version: "0",
        website: "https://www.mitrelinen.co.uk/my-account/invoicesandcredits",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863971.jpg",
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
        entryUrl: "https://www.mitrelinen.co.uk/my-account/invoicesandcredits",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MitreLinenCollector.CONFIG);
    }
}
