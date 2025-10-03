
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PomonaTerreAzurCollector extends SketchCollector {

    static CONFIG = {
        id: "pomona_terre_azur",
        name: "POMONA TERRE AZUR",
        description: "i18n.collectors.pomona_terre_azur.description",
        version: "0",
        website: "https://login.groupe-pomona.fr/auth/realms/web/protocol/openid-connect/auth?client_id=prd-drupal-ta&response_type=code&scope=openid%20email%20profile&redirect_uri=https%3A//www.terreazur.fr/openid-connect/pomona_keycloak&state=zUhTIlGnaKsIF8l5PIVe7CQF2Apm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2520617.jpg",
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
        entryUrl: "https://login.groupe-pomona.fr/auth/realms/web/protocol/openid-connect/auth?client_id=prd-drupal-ta&response_type=code&scope=openid%20email%20profile&redirect_uri=https%3A//www.terreazur.fr/openid-connect/pomona_keycloak&state=zUhTIlGnaKsIF8l5PIVe7CQF2Apm",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PomonaTerreAzurCollector.CONFIG);
    }
}
