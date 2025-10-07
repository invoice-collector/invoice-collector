
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StarksoftDeutschlandGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "starksoft_deutschland_gmbh",
        name: "Starksoft Deutschland GmbH",
        description: "i18n.collectors.starksoft_deutschland_gmbh.description",
        version: "0",
        website: "https://www.insikacenter.de/insikaoffice/script/module/rechnungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1316281.jpg",
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
        entryUrl: "https://www.insikacenter.de/insikaoffice/script/module/rechnungen/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StarksoftDeutschlandGmbhCollector.CONFIG);
    }
}
