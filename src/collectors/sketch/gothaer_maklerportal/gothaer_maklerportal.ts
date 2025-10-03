
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GothaerMaklerportalCollector extends SketchCollector {

    static CONFIG = {
        id: "gothaer_maklerportal",
        name: "Gothaer Maklerportal",
        description: "i18n.collectors.gothaer_maklerportal.description",
        version: "0",
        website: "https://makler.gothaer.de/app/ProvisionsabrechnungOnline/start.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/73645.jpg",
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
        entryUrl: "https://makler.gothaer.de/app/ProvisionsabrechnungOnline/start.jsp",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GothaerMaklerportalCollector.CONFIG);
    }
}
