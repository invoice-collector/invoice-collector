
import { SketchCollector } from '../../sketchCollector';

export class WarminsterMunicipalAuthorityCollector extends SketchCollector {

    static CONFIG = {
        id: "warminster_municipal_authority",
        name: "Warminster Municipal Authority",
        description: "i18n.collectors.warminster_municipal_authority.description",
        version: "0",
        website: "https://wma.authoritypay.com/account/history/8660",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2846257.jpg",
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
        entryUrl: "https://wma.authoritypay.com/account/history/8660",
    }

    constructor() {
        super(WarminsterMunicipalAuthorityCollector.CONFIG);
    }
}
