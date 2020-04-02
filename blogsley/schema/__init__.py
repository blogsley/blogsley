import graphene

from rx import Observable

import blogsley.schema.users
import blogsley.schema.blog
import blogsley.schema.images

class Mutations(users.MyMutations, blog.MyMutations, images.MyMutations):
    pass

class Queries(users.Query, blog.Query, images.Query):
    pass

#class Subscriptions(users.Subscription, blog.Subscription, images.Subscription):
class Subscriptions(blog.Subscription):
    pass

#schema = graphene.Schema(query=Query, mutation=MyMutations)
schema = graphene.Schema(query=Queries, mutation=Mutations, subscription=Subscriptions)
