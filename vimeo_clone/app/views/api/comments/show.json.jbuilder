json.comment do 
  json.partial! '/api/comments/comment', comment: @comment
end

# json.user do 
#   json.partial! `/api/users/user`, user: @user.comment
# end

# not sure about above this