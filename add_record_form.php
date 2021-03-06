<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Recursive&family=Righteous&display=swap" rel="stylesheet">
<?php
/**
 * Start the session.
 */
session_start();

/**
 * Check if the user is logged in.
 */
if(!isset($_SESSION['admin_id']) || !isset($_SESSION['logged_in'])){
    //User not logged in. Redirect them back to the login.php page.
    header('Location: login.php');
    exit;
}


/**
 * Print out something that only logged in users can see.
 */
require('database.php');
$query = 'SELECT *
          FROM categories
          ORDER BY categoryID';
$statement = $db->prepare($query);
$statement->execute();
$categories = $statement->fetchAll();
$statement->closeCursor();
?>
<!-- the head section -->
 <div class="container">
<?php
include('includes/header.php');
?>
        <h1>Add Record</h1>
        <form action="add_record.php" method="post" enctype="multipart/form-data"
              id="add_record_form">

            <label>Category:</label>
            <select name="category_id">
            <?php foreach ($categories as $category) : ?>
                <option value="<?php echo $category['categoryID']; ?>">
                    <?php echo $category['categoryName']; ?>
                </option>
            <?php endforeach; ?>
            </select>
            <br>
            <label>Name:</label>
            <input type="input" name="name"  id="nameid" placeholder="add first name" required size="12" onBlur="name_validation();" required><span id="name_err"></span>
            <br>

            <label>Age:</label>
            <input type="input" name="age"  placeholder="Enter Age Range" required>
            <br>

            <label>Manufacturer:</label>
            <input type="input" name="manufacturerNumber" id="manid" placeholder="Enter Code" required size="12" onBlur="man_validation();"/><span id="man_err"></span>
            <br>

            <label>List Price:</label>
            
            <input type="input" name="price" id="priceid"  placeholder="Enter Price" required size="12" onBlur="price_validation();"/><span id="price_err"></span>
            <br>        
            
            <label>Image:</label>
            <input type="file" name="image" accept="image/*" />
            <br>
            
            <label>&nbsp;</label>
            <input type="submit" value="Add Record" href="admin.php">
            <br>
        </form>
        <p><a href="admin.php">Back</a></p>
        
    <?php
include('includes/footer.php');

?>
<script src="validation.js"></script>
