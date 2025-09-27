
import { SketchCollector } from '../../sketchCollector';

export class DomainfactoryCollector extends SketchCollector {

    static CONFIG = {
        id: "domainfactory",
        name: "DomainFactory",
        description: "i18n.collectors.domainfactory.description",
        version: "0",
        website: "https://sso.df.eu/?app=cp&path=%2Fkunde%2Findex.php5&realm=idp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/335.jpg",
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
        entryUrl: "https://sso.df.eu/?app=cp&path=%2Fkunde%2Findex.php5&realm=idp",
    }

    constructor() {
        super(DomainfactoryCollector.CONFIG);
    }
}
