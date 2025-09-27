
import { SketchCollector } from '../../sketchCollector';

export class EurodelkredereCollector extends SketchCollector {

    static CONFIG = {
        id: "eurodelkredere",
        name: "EUROdelkredere",
        description: "i18n.collectors.eurodelkredere.description",
        version: "0",
        website: "https://keycloak.portal.eurodelkredere.de/auth/realms/euro-delkredere/protocol/openid-connect/auth?client_id=ed-ng-supplier&redirect_uri=https%3A%2F%2Fsupplier.portal.eurodelkredere.de%2Fletters-of-advice&state=28edd79d-f143-4fad-89e1-2985d435dd8b&respons",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1675301.jpg",
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
        entryUrl: "https://keycloak.portal.eurodelkredere.de/auth/realms/euro-delkredere/protocol/openid-connect/auth?client_id=ed-ng-supplier&redirect_uri=https%3A%2F%2Fsupplier.portal.eurodelkredere.de%2Fletters-of-advice&state=28edd79d-f143-4fad-89e1-2985d435dd8b&respons",
    }

    constructor() {
        super(EurodelkredereCollector.CONFIG);
    }
}
