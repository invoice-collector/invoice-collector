
import { SketchCollector } from '../../sketchCollector';

export class SeoProfilerCollector extends SketchCollector {

    static CONFIG = {
        id: "seo_profiler",
        name: "SEO Profiler",
        description: "i18n.collectors.seo_profiler.description",
        version: "0",
        website: "https://www.seoprofiler.de/account/settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20915.jpg",
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
        entryUrl: "https://www.seoprofiler.de/account/settings",
    }

    constructor() {
        super(SeoProfilerCollector.CONFIG);
    }
}
