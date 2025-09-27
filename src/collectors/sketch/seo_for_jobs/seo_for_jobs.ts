
import { SketchCollector } from '../../sketchCollector';

export class SeoForJobsCollector extends SketchCollector {

    static CONFIG = {
        id: "seo_for_jobs",
        name: "SEO for Jobs",
        description: "i18n.collectors.seo_for_jobs.description",
        version: "0",
        website: "https://app.seo-for-jobs.com/clients/1752/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1383483.jpg",
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
        entryUrl: "https://app.seo-for-jobs.com/clients/1752/subscription",
    }

    constructor() {
        super(SeoForJobsCollector.CONFIG);
    }
}
